import { STOP_GAME } from '../constants';
//import { getWinnersAction } from './getWinners.action'

export const stopGameAction = (payload) => dispatch => {
  console.log(payload.winner)
  
  dispatch({ type: STOP_GAME, payload: payload.winner })
  //dispatch(getWinnersAction())

}