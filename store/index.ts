import { AnyAction, createStore, Reducer } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import { MakeStore, createWrapper } from 'next-redux-wrapper';

import reducers from 'store/reducers';
import { ContentsState } from 'store/content/reducers';

export type RootState = {
    contents: ContentsState;
};

const reducer: Reducer<RootState, AnyAction> = (state, action) => {
    if (action.type === 'HYDRATE') {
        const nextState = {
            ...state,
            ...action.payload,
        };

        return nextState;
    } else {
        return reducers(state, action);
    }
};

const initializeStore: MakeStore<RootState> = () => {
    const store = createStore(reducer, undefined, devToolsEnhancer({}));

    return store;
};

export const wrapper = createWrapper<RootState>(initializeStore);
