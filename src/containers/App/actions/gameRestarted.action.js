import { GAME_RESTARTED } from '../constants';
import { setBlueAction } from './setBlue.action'
import { setGameFieldOptionsAction } from './setGameFieldOptions.action' 

export const gameRestartedAction = (payload) => dispatch => {

  const { play, fieldSize, delay } = payload;
  const options = setGameFieldOptionsAction(fieldSize);
  const { gameField, emptySquares } = options.payload;

  const newGameOptions = {
    play,
    delay,
    gameField,
    emptySquares  
  }

  
  dispatch(setGameFieldOptionsAction(fieldSize));
  dispatch({ type: GAME_RESTARTED })
  dispatch(setBlueAction(newGameOptions));
}