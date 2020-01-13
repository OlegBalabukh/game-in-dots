import { WINNER_ADDED } from '../constants';
import { gameFinishedAction } from './gameFinished.action'
import { getWinnersAction } from './getWinners.action'
import { postWinner } from '../../../services/postWinner.service';
import { formatDate } from '../../../utils/formatDate';

export const addWinnerAction = (payload) => async dispatch => {
  const { winner, date } = payload;
  const newWinner = { winner, date: formatDate(date) }
  dispatch(gameFinishedAction(payload.winner))
  
  const winners = await postWinner(newWinner)
  dispatch(getWinnersAction(winners))
  dispatch({ type: WINNER_ADDED })
}