import { SET_GREEN } from '../constants';

export const setGreenAction = (payload) => dispatch => {

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

  const updatedWithGreen = setColor(gameField, id, 'green')
  
  dispatch({ type: SET_GREEN, payload: updatedWithGreen });
    
 
}