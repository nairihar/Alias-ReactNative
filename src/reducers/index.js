import { combineReducers } from 'redux';

import * as score from './score.reducer';
import * as words from './words.reducer';
import * as config from './config.reducer';
import * as next from './next.reducer';
import * as route from './route.reducers';

export default combineReducers(Object.assign({}, score, words, config, next, route));
