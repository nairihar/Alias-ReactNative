import createReducer from '../helpers/createReducer';
import * as types from '../actions/types';

export const score = createReducer([0, 0], {
    [types.SCORE](state, action) {
        return action.score;
    }
});
