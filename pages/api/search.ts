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
        const radarrRequest = radarrClient('api/movie/lookup', { params });

        const sonarrRequest = sonarrClient('api/series/lookup', { params });

        const [radarrRes, sonarrRes] = await axios.all([radarrRequest, sonarrRequest]);

        const radarrData = radarrRes.data.map((content) => {
            content.type = 'movie';
            return content;
        });

        const sonarrData = sonarrRes.data.map((content) => {
            content.type = 'tv';
            return content;
        });

        res.status(200).json([...radarrData, ...sonarrData]);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
};
