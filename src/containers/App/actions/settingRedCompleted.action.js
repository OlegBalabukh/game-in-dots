import { SETTING_RED_COMPLETED } from '../constants';
import { settingBlueAction } from './settingBlue.action'
import { addWinnerAction } from './addWinner.action'

export const settingRedCompletedAction = (payload) => dispatch => {
  
  const { activeSquare, gameField, score } = payload  

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

  const newOptions = {    
    gameField: updatedWithRed,
    score: { 
      ...score,
      computer: ++score.computer
    }
  }

  dispatch({ type: SETTING_RED_COMPLETED, payload: newOptions })

  const startNextRound = newOptions.score.computer < score.winner
  
  startNextRound
    ? dispatch(settingBlueAction())
    : dispatch(addWinnerAction({ winner: "Computer", date: Date.now() }))    
}