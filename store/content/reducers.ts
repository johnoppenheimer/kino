import { ActionType } from 'typesafe-actions';

import { SET_SERIES } from 'store/constant';
import Content from 'models/Content';

import * as actions from './actions';

export type ContentsAction = ActionType<typeof actions>;

export type ContentsState = {
    series: Content[];
};

const initialState: ContentsState = {
    series: [],
};

const ContentReducer = (state: ContentsState = initialState, action: ContentsAction): ContentsState => {
    switch (action.type) {
        case SET_SERIES:
            return {
                ...state,
                series: action.payload,
            };
        default:
            return state;
    }
};

export default ContentReducer;
