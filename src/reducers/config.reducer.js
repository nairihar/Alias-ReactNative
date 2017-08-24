import createReducer from '../helpers/createReducer';
import * as types from '../actions/types';

export const config = createReducer({}, {
    [types.GAME_CONFIG](state, action) {
        return action.config;
    }
});
