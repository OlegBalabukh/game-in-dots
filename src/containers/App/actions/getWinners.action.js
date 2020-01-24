import { fetchWinners } from '../../../services/fetchWinners.service';
import { GET_WINNERS } from '../constants';

export const getWinnersAction = winners => async dispatch => {
  if (!winners) {
    const payload = await fetchWinners();
    dispatch({ type: GET_WINNERS, payload });
  } else {
    dispatch({ type: GET_WINNERS, payload: winners });
  }
};
