import { SET_MODE_OPTIONS } from '../constants';
import { setGameFieldOptionsAction } from './setGameFieldOptions.action'

export const setModeOptionsAction  = (payload) => dispatch => { 
  const fieldSize = payload.field;
  dispatch(setGameFieldOptionsAction(fieldSize));
  dispatch({type: SET_MODE_OPTIONS, payload})
};