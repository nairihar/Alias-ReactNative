import createReducer from '../helpers/createReducer';
import * as types from '../actions/types';

export const routes = createReducer({scene: {}}, {
    [types.ROUTE](state, action) {
      return {
        ...state,
        scene: action.scene,
        };
    }
});
