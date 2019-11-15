import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: process.env.TMDB_KEY,
    },
});

/**
 * To use axios response more easily in the `react-query`,
 * use that interceptor to just return the `data`
 */
instance.interceptors.response.use(response => {
    return response.data;
});

export default instance;
