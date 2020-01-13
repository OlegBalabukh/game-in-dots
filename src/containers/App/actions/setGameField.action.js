import { SET_GAME_FIELD } from '../constants';
import { makeField } from '../../../utils/makeField';
import { makeEmptySquares } from '../../../utils/makeEmptySquares';
import { setWinnerScore } from '../../../utils/setWinnerScore';

export const setGameFieldAction = (fieldSize) => {
  const gameFieldOptions = {
    gameField: makeField(fieldSize),
    emptySquares: makeEmptySquares(fieldSize),
    score:  {
      player: 0,
      computer: 0,
      winner: setWinnerScore(fieldSize)
    },
  }
  return { type: SET_GAME_FIELD, payload: gameFieldOptions }
};