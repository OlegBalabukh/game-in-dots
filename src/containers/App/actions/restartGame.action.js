import { RESTART_GAME } from '../constants';
import { setBlueAction } from './setBlue.action'
import { setGameFieldOptionsAction } from './setGameFieldOptions.action' 

export const restartGameAction = (payload) => dispatch => {

  const { fieldSize, delay } = payload;
  const options = setGameFieldOptionsAction(fieldSize);
  const { gameField, emptySquares } = options.payload;

  const newGameOptions = {
    delay,
    gameField,
    emptySquares  
  }

  dispatch({ type: RESTART_GAME })
  dispatch(setGameFieldOptionsAction(fieldSize));
  dispatch(setBlueAction(newGameOptions));
}