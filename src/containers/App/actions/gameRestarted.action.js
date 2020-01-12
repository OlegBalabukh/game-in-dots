import { GAME_RESTARTED } from '../constants';
import { setBlueAction } from './setBlue.action'
import { setGameFieldOptionsAction } from './setGameFieldOptions.action' 

export const gameRestartedAction = (payload) => dispatch => {

  const { fieldSize, delay } = payload;
  const options = setGameFieldOptionsAction(fieldSize);
  const { gameField, emptySquares } = options.payload;

  const newGameOptions = {
    delay,
    gameField,
    emptySquares  
  }

  dispatch({ type: GAME_RESTARTED })
  dispatch(setGameFieldOptionsAction(fieldSize));
  dispatch(setBlueAction(newGameOptions));
}