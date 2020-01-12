import { SETTING_BLUE_COMPLETED } from '../constants';

export const settingBlueCompletedAction  = (payload)  => dispatch => {
  const { play, gameField, emptySquares } = payload;
  
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

  const randomID = getRandomID(emptySquares)
  const updatedEmptySquares = emptySquares.filter(id => id !== randomID)
  const updatedGameField = setColor(gameField, randomID, 'blue')
  const updatedActiveSquare = {color: 'blue', id: randomID}

  const newRoundOptions = {
    gameField: updatedGameField, 
    emptySquares: updatedEmptySquares,
    activeSquare: updatedActiveSquare
  }
  
  play && dispatch({ type: SETTING_BLUE_COMPLETED, payload: newRoundOptions })  
};