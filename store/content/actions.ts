import { action } from 'typesafe-actions';

import { SET_SERIES, SELECT_CONTENT } from 'store/constant';
import Content from 'models/Content';

export const setSeries = (series: Content[]) => action(SET_SERIES, series);
export const selectContent = (content?: Content) => action(SELECT_CONTENT, content);
