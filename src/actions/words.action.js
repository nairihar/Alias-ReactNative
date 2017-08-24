import * as types from './types';

export function updateWords(words) {
    return {
        type: types.WORDS,
        words: words
    }
}  
