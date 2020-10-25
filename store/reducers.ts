import { combineReducers } from 'redux';

import contents from 'store/content/reducers';

const reducers = combineReducers({ contents });
export default reducers;
