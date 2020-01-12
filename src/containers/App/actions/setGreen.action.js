import { SET_GREEN } from '../constants';
import { settingBlueAction } from './settingBlue.action'
import { addWinnerAction } from './addWinner.action'

export const setGreenAction = (payload) => dispatch => {

  const { id, gameField, score, playerName } = payload
  
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

  const newOptions = {    
    gameField: updatedWithGreen,
    score: { 
      ...score,
      player: ++score.player
    }
  }

  dispatch({ type: SET_GREEN, payload: newOptions });

  const startNextRound = newOptions.score.player < score.winner

  startNextRound
    ? dispatch(settingBlueAction())
    : dispatch(addWinnerAction({ winner: playerName, date: Date.now() }))  
}