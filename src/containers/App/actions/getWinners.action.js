import { fetchWinners } from '../../../services/fetchWinners.service';
import { GET_WINNERS } from '../constants';

export const getWinnersAction = () => async (dispatch) => {
  const payload = await fetchWinners();
  dispatch({ type: GET_WINNERS, payload })
};