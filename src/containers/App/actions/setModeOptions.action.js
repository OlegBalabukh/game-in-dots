import { SET_MODE_OPTIONS } from '../constants';
import { setGameFieldAction } from './setGameField.action'

export const setModeOptionsAction  = (payload) => dispatch => { 
  const fieldSize = payload.field;
  dispatch(setGameFieldAction(fieldSize));
  dispatch({type: SET_MODE_OPTIONS, payload})
};