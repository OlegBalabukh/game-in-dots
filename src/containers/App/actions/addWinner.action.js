//import { ADD_WINNER } from '../constants';
import { gameFinishedAction } from './gameFinished.action'
//import { postWinnerAction } from './postWinner.action'

export const addWinnerAction = (payload) => dispatch => {
  
  //dispatch({ type: ADD_WINNER, payload: payload.winner })
  dispatch(gameFinishedAction(payload.winner))
  //dispatch(postWinnerAction())

}