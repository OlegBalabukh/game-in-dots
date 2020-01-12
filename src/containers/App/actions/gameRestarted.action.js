import { GAME_RESTARTED } from '../constants';
import { settingBlueAction } from './settingBlue.action'
import { setGameFieldOptionsAction } from './setGameFieldOptions.action' 

export const gameRestartedAction = (fieldSize) => dispatch => {  
  dispatch(setGameFieldOptionsAction(fieldSize));
  dispatch({ type: GAME_RESTARTED })
  dispatch(settingBlueAction());
}