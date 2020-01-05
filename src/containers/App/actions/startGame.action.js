import { START_GAME } from '../constants';
import { setBlueAction } from './setBlue.action'

export const startGameAction = (payload) => dispatch => {
  dispatch({ type: START_GAME, payload: payload.play })

  dispatch(setBlueAction(payload.options));
}