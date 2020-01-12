import { WINNER_ADDED } from '../constants';
import { gameFinishedAction } from './gameFinished.action'
import { getWinnersAction } from './getWinners.action'
import { postWinner } from '../../../services/postWinner.service';

export const addWinnerAction = (payload) => async dispatch => {
  const { winner, date } = payload;

  const formatDate = (dateNow) => {
    const date = new Date(dateNow);
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];  
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const time = date.toString().substr(16, 5)
  
      return `${time}; ${day} ${month} ${year}`
  }
  
  const newWinner = { winner, date: formatDate(date) }

  dispatch(gameFinishedAction(payload.winner)) 
  
  const winners = await postWinner(newWinner) 
  dispatch(getWinnersAction(winners))
  dispatch({ type: WINNER_ADDED })
}