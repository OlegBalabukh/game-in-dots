import { SET_GREEN } from '../constants';
import { setBlueAction } from './setBlue.action'

export const setGreenAction = (payload) => dispatch => {

  const { id, gameField, delay, emptySquares, score } = payload
  
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
    //dispatch(stopGameAction({ winner: "Player", score: nextRoundOptions.score.player }))
  }
  
}