import * as types from './types';

export function updateScore(score) {
    return {
        type: types.SCORE,
        score: score
    }
}
