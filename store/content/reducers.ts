import { ActionType } from 'typesafe-actions';

import { SELECT_CONTENT, SET_SERIES } from 'store/constant';
import Content from 'models/Content';

import * as actions from './actions';

export type ContentsAction = ActionType<typeof actions>;

export type ContentsState = {
    series: Content[];
    selectedContent?: Content;
};

const initialState: ContentsState = {
    series: [],
    selectedContent: undefined,
};

const ContentReducer = (state: ContentsState = initialState, action: ContentsAction): ContentsState => {
    switch (action.type) {
        case SET_SERIES:
            return {
                ...state,
                series: action.payload,
            };
        case SELECT_CONTENT:
            return {
                ...state,
                selectedContent: action.payload,
            };
        default:
            return state;
    }
};

export default ContentReducer;
