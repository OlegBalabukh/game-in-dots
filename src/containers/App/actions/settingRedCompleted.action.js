import { SETTING_RED_COMPLETED } from '../constants';
import { setBlueAction } from './setBlue.action'

export const settingRedCompletedAction = (payload) => dispatch => {
  const { delay, activeSquare, gameField, emptySquares } = payload

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

  const updatedWithRed = setColor(gameField, activeSquare.id, 'red')

  const nextRoundOptions = {
    gameField: updatedWithRed,
    delay,
    emptySquares
  }
  
  dispatch({ type: SETTING_RED_COMPLETED, payload: updatedWithRed })
  dispatch(setBlueAction(nextRoundOptions))  
}