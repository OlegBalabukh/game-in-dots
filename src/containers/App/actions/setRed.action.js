import { SET_RED } from '../constants';

export const setRedAction = (payload) => dispatch => {

  const { id, gameField } = payload

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

  const updatedWithRed = setColor(gameField, id, 'red')
  
  dispatch({ type: SET_RED, payload: updatedWithRed });
}