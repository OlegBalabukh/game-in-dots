import { fetchSettings } from '../../../services/fetchSettings.service';
import { GET_SETTINGS } from '../constants';

export const getSettingsAction = () => async dispatch => {
  const payload = await fetchSettings();
  dispatch({ type: GET_SETTINGS, payload });
};
