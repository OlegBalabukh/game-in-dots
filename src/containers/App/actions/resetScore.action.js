import { RESET_SCORE, START_GAME } from '../constants';
import { startGameAction } from './startGame.action'

export const resetScoreAction = (payload) => dispatch => {

  const { fieldSize, delay } = payload;

  const makeField = (size) => {
    const field = [];
    let counter = 1;

    const makeRow = (size) => {
      const row = [];
       
      for (let i = 0; i < size; i++) {
        const square = {
          id: counter++,
          color: ""
        }
        row.push(square)
      }
      return row;
    }  
    
    for (let i = 0; i < size; i++) {
      field.push(makeRow(size))
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

  const setWinnerScore = (n) => {
    if (n % 2) {
      return Math.ceil(n*n / 2)
    }
    return n*n / 2 + 1
  }

  const newGameOptions = {
    delay,
    gameField: makeField(fieldSize),
    emptySquares: makeEmptySquares(fieldSize)   
  }
  const resetScore = {
    player: 0,
    computer: 0,
    winner: setWinnerScore(fieldSize)
  }
 
  dispatch({ type: RESET_SCORE, payload: resetScore })
  dispatch(startGameAction(newGameOptions));
}