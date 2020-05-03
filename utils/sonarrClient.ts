import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.SONARR_URL,
    headers: {
        'X-Api-Key': process.env.SONARR_API_KEY,
    },
});

export default instance;
