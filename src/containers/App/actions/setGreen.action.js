import { SET_GREEN } from '../constants';
import { setBlueAction } from './setBlue.action'

export const setGreenAction = (payload) => dispatch => {

  const { id, gameField, delay, emptySquares } = payload

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

  const updatedWithGreen = setColor(gameField, id, 'green')

  const nextRoundOptions = {
    gameField: updatedWithGreen,
    delay,
    emptySquares
  }
  
  dispatch({ type: SET_GREEN, payload: updatedWithGreen });
  dispatch(setBlueAction(nextRoundOptions))
}