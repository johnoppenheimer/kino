import { NextApiRequest, NextApiResponse } from 'next';

import tmdbClient from 'utils/tmdbClient';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.query.search) {
        return res.status(200).json([]);
    }

    tmdbClient('search/multi', {
        params: {
            api_key: process.env.TMDB_KEY,
            languages: 'en-US',
            query: req.query.search,
            page: 1,
        },
    })
        .then((response: any) => {
            res.status(200).json(response.data.results);
        })
        .catch(error => {
            res.status(error.response.status).json(error.response.data);
        });
};
