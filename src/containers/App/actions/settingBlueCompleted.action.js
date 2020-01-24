import { SETTING_BLUE_COMPLETED } from '../constants';
import { setColor } from '../../../utils/setColor';
import { getRandom } from '../../../utils/getRandom';

export const settingBlueCompletedAction = payload => dispatch => {
  const { play, gameField, emptySquares } = payload;

  const randomID = getRandom(emptySquares);
  const updatedEmptySquares = emptySquares.filter(id => id !== randomID);
  const updatedGameField = setColor(gameField, randomID, 'blue');
  const updatedActiveSquare = { color: 'blue', id: randomID };

  const newRoundOptions = {
    gameField: updatedGameField,
    emptySquares: updatedEmptySquares,
    activeSquare: updatedActiveSquare
  };

  play && dispatch({ type: SETTING_BLUE_COMPLETED, payload: newRoundOptions });
};
