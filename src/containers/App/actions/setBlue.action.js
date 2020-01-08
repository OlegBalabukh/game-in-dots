import { SET_BLUE } from '../constants';

export const setBlueAction  = (payload)  => async dispatch => {
  const { delay, gameField, emptySquares } = payload;

  const getRandomID = (arr) => {
    return  arr[Math.floor(Math.random() * arr.length)];   
  }

  const setColor = (field, id, color) => {
    return field.map(row => (
      row.map(square => {
        if (square.id === id) {
          return {...square, color}
        }
        return square
      })
    ))
  }

  const sleep = ms => {
    return new Promise(resolve => {
      setTimeout(() => resolve(), ms)
    })
  }

  const randomID = getRandomID(emptySquares)
  const updatedEmptySquares = emptySquares.filter(id => id !== randomID)
  const updatedGameField = setColor(gameField, randomID, 'blue')
  const updatedActiveSquare = {color: 'blue', id: randomID}

  const newGameOptions = {
    gameField: updatedGameField, 
    emptySquares: updatedEmptySquares,
    activeSquare: updatedActiveSquare 
  }

  return sleep(delay)
    .then(() => dispatch({ type: SET_BLUE, payload: newGameOptions }))    
    
};