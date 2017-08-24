import createReducer from '../helpers/createReducer';
import * as types from '../actions/types';

export const next = createReducer(0, {
    [types.NEXT](state, action) {
        return action.next;
    }
});
