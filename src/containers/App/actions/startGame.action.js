import { START_GAME } from '../constants';

export const startGameAction = (payload) => dispatch => {
  dispatch({ type: START_GAME, payload })
  //dispatch(setBlueAction());
}