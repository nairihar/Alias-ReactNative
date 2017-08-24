import * as updateScore from './score.action';
import * as updateWords from './words.action';
import * as updateGameConfig from './config.action';
import * as changeNextTeam from './next.action';

const ActionCreators =  Object.assign({}, updateScore, updateWords, updateGameConfig, changeNextTeam);

export default ActionCreators;
