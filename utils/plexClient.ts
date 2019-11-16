import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://plex.tv/',
    headers: {
        'X-Plex-Product': process.env.PROJECT_NAME,
        'X-Plex-Platform': 'Web',
        'X-Plex-Device': `${process.env.PROJECT_NAME} (Web)`,
        'X-Plex-Client-Identifier': process.env.CLIENT_IDENTIFIER,
    },
});

export default instance;
