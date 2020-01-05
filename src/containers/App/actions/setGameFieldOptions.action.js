import { SET_GAME_FIELD_OPTIONS } from '../constants';

export const setGameFieldOptionsAction = (fieldSize) => {
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

  const makeEmptySquares = (n) => {
    const emptySquares = new Array(n*n);
    for (let i = 0; i < emptySquares.length; i++) {
      emptySquares[i] = i + 1      
    }
    return emptySquares;
  }

  const gameFieldOptions = {
    gameField: makeField(fieldSize),
    emptySquares: makeEmptySquares(fieldSize)
  }
 
  return { type: SET_GAME_FIELD_OPTIONS, payload: gameFieldOptions }
};