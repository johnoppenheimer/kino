import { action } from 'typesafe-actions';

import { SET_SERIES } from 'store/constant';
import Content from 'models/Content';

export const setSeries = (series: Content[]) => action(SET_SERIES, series);
