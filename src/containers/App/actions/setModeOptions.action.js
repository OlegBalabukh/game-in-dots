import { SET_MODE_OPTIONS } from '../constants';
import { setGameFieldOptionsAction } from './setGameFieldOptions.action'
import { stopGameAction } from './stopGame.action'

export const setModeOptionsAction  = (payload) => dispatch => { 
  const { modeOptions: { field }, modeOptions, play } = payload
  
  play && dispatch(stopGameAction());

  dispatch({ type: SET_MODE_OPTIONS, payload: modeOptions })
  dispatch(setGameFieldOptionsAction(field));
};