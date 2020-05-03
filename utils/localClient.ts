import axios from 'axios';
import { plainToClass } from 'class-transformer';

import Content from 'models/Content';

export const search = (query: string) => {
    return axios
        .get<Content[]>('/api/search', { params: { search: query } })
        .then((res) => res.data.map((content) => plainToClass(Content, content)));
};
