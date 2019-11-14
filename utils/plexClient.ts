import axios from 'axios';

import { env } from 'utils/config';

const instance = axios.create({
    baseURL: 'https://plex.tv/',
    headers: {
        'X-Plex-Product': env.projectName,
        'X-Plex-Platform': 'Web',
        'X-Plex-Device': `${env.projectName} (Web)`,
        'X-Plex-Client-Identifier': env.clientId,
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
