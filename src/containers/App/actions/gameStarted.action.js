import { GAME_STARTED } from '../constants';
import { settingBlueAction } from './settingBlue.action'

export const gameStartedAction = () => dispatch => {
  dispatch({ type: GAME_STARTED })  
  dispatch(settingBlueAction());
}