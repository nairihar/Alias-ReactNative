import * as types from './types';

export function changeNextTeam(nextTeamNumber) {
    return {
        type: types.NEXT,
        next: nextTeamNumber
    }
}
