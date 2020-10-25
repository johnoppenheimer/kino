import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import radarrClient from 'utils/radarrClient';
import sonarrClient from 'utils/sonarrClient';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.query.search || req.query.search === '') {
        return res.status(200).json([]);
    }

    const params = {
        languages: 'en-US',
        term: req.query.search,
    };

    try {
        const radarrLookup = radarrClient('api/movie/lookup', { params });

        const sonarrLookup = sonarrClient('api/series/lookup', { params });
        const sonarrSeries = sonarrClient('api/series', { params });

        const [radarrRes, sonarrRes, series] = await axios.all([radarrLookup, sonarrLookup, sonarrSeries]);

        const radarrData = radarrRes.data.map((content) => {
            content.type = 'movie';
            content.exist = new Date(content.added).getFullYear() !== 1;

            return content;
        });

        const sonarrData = sonarrRes.data.map((content) => {
            content.type = 'tv';
            content.exist = series.data.find((serie) => serie.tvdbId === content.tvdbId);
            return content;
        });

        res.status(200).json([...radarrData, ...sonarrData]);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
};
