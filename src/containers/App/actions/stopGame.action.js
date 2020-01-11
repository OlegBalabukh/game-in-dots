import { STOP_GAME } from '../constants';
//import { getWinnersAction } from './getWinners.action'

export const stopGameAction = (payload) => dispatch => {
  
  dispatch({ type: STOP_GAME, payload: payload.winner })
  //dispatch(getWinnersAction())

}