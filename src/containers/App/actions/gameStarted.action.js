import { GAME_STARTED } from '../constants';
import { setBlueAction } from './setBlue.action'

export const gameStartedAction = (payload) => dispatch => {
  dispatch({ type: GAME_STARTED })  
  dispatch(setBlueAction(payload));
}