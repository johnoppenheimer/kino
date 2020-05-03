import { NextApiRequest, NextApiResponse } from 'next';

import radarrClient from 'utils/radarrClient';
import tmdbClient from 'utils/tmdbClient';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.query.search || req.query.search === '') {
        return res.status(200).json([]);
    }

    try {
        const response = await radarrClient('api/movie/lookup', {
            params: {
                languages: 'en-US',
                term: req.query.search,
            },
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
};
