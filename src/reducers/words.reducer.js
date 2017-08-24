import createReducer from '../helpers/createReducer';
import * as types from '../actions/types';

import { getRandomWords, getAllWords } from '../helpers/randomWords';

export const words = createReducer(getAllWords(), {
    [types.WORDS](state, action) {
        return action.words;
    }
});
