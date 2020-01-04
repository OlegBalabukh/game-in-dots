import { SET_GAME_FIELD } from '../constants';

export const setGameFieldAction = (fieldSize) => {
  let counter = 1;

  const makeRow = (n) => {
    const row = [];

    for (let i = 0; i < n; i++) {
      const square = {
        id: counter++,
        color: ""
      }
      row.push(square)
    }

    return row;
  }

  const makeField = (n) => {
    const field = [];
    for (let i = 0; i < n; i++) {
      field.push(makeRow(fieldSize))
    }

    return field;
  }

  const gameField = makeField(fieldSize)
 
  return { type: SET_GAME_FIELD, payload: gameField }
};