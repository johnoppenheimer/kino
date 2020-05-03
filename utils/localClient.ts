import axios from 'axios';

import { IContent } from 'models/Content';

export const search = (query: string) => {
    return axios.get<IContent[]>('/api/search', { params: { search: query } });
};
