import { GAME_RESTARTED } from '../constants';
import { settingBlueAction } from './settingBlue.action'
import { setGameFieldAction } from './setGameField.action'

export const gameRestartedAction = (fieldSize) => dispatch => {
  dispatch(setGameFieldAction(fieldSize));
  dispatch({ type: GAME_RESTARTED })
  dispatch(settingBlueAction());
}