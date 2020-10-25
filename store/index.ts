import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import { MakeStore, createWrapper } from 'next-redux-wrapper';

import reducers from 'store/reducers';
import { ContentsState } from 'store/content/reducers';

export type RootState = {
    contents: ContentsState;
};

const initializeStore: MakeStore<RootState> = () => {
    const store = createStore(reducers(), {}, devToolsEnhancer({}));

    return store;
};

export const wrapper = createWrapper<RootState>(initializeStore);
