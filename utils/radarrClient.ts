import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.RADARR_URL,
    headers: {
        'X-Api-Key': process.env.RADARR_API_KEY,
    },
});

export default instance;
