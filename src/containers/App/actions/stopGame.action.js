import { STOP_GAME } from '../constants';

export const stopGameAction = (payload) => dispatch => {
  
  dispatch({ type: STOP_GAME, payload })

}