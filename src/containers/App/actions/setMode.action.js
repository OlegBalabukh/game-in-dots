import { SET_MODE } from '../constants';
import { setGameFieldAction } from './setGameField.action';
import { stopGameAction } from './stopGame.action';

export const setModeAction = payload => dispatch => {
  const {
    modeOptions: { field },
    modeOptions,
    play
  } = payload;

  play && dispatch(stopGameAction());
  dispatch({ type: SET_MODE, payload: modeOptions });
  dispatch(setGameFieldAction(field));
};
