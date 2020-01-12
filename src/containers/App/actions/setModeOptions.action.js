import { SET_MODE_OPTIONS } from '../constants';
import { setGameFieldOptionsAction } from './setGameFieldOptions.action'
import { stopGameAction } from './stopGame.action'

export const setModeOptionsAction  = (payload) => dispatch => { 
  const fieldSize = payload.field;
  
  
  dispatch(stopGameAction());
  dispatch({ type: SET_MODE_OPTIONS, payload })
  dispatch(setGameFieldOptionsAction(fieldSize));
};