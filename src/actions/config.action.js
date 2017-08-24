import * as types from './types';

export function updateGameConfig(config) {
    return {
        type: types.GAME_CONFIG,
        config: config
    }
}
