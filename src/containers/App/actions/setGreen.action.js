import { SET_GREEN } from '../constants';
import { setBlueAction } from './setBlue.action'
import { addWinnerAction } from './addWinner.action'

export const setGreenAction = (payload) => dispatch => {

  const { id, gameField, delay, emptySquares, score, playerName } = payload
  
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
    score: { 
      ...score,
      player: ++score.player
    },
    delay,
    emptySquares
  }

  dispatch({ type: SET_GREEN, payload: updatedWithGreen });

  const startNextRound = nextRoundOptions.score.player < nextRoundOptions.score.winner

  if (startNextRound) {
    dispatch(setBlueAction(nextRoundOptions))
  } else {
    dispatch(addWinnerAction({ winner: playerName, date: Date.now() }))
  }
  
}