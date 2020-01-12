import { SETTING_RED_COMPLETED } from '../constants';
import { setBlueAction } from './setBlue.action'
import { addWinnerAction } from './addWinner.action'

export const settingRedCompletedAction = (payload) => dispatch => {
  const { delay, activeSquare, gameField, emptySquares, score } = payload  

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
    play: true,
    gameField: updatedWithRed,
    score: { 
      ...score,
      computer: ++score.computer
    },
    delay,
    emptySquares
  }

  dispatch({ type: SETTING_RED_COMPLETED, payload: updatedWithRed })

  const startNextRound = nextRoundOptions.score.computer < nextRoundOptions.score.winner
  if (startNextRound) {
    dispatch(setBlueAction(nextRoundOptions))
  } else {
    dispatch(addWinnerAction({ winner: "Computer", date: Date.now() }))
  }
    
}