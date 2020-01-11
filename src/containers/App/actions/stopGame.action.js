import { STOP_GAME } from '../constants';
//import { postWinnerAction } from './postWinner.action'

export const stopGameAction = (payload) => dispatch => {
  
  dispatch({ type: STOP_GAME, payload: payload.winner })
  //dispatch(postWinnerAction())

}