import { SET_GREEN } from '../constants';
import { settingBlueAction } from './settingBlue.action'
import { addWinnerAction } from './addWinner.action'
import { setColor } from '../../../utils/setColor';

export const setGreenAction = (payload) => dispatch => {
  const { id, gameField, score, playerName } = payload
    
  const updatedWithGreen = setColor(gameField, id, 'green')

  const newOptions = {
    gameField: updatedWithGreen,
    score: { ...score, player: ++score.player }
  }

  dispatch({ type: SET_GREEN, payload: newOptions });
  const startNextRound = newOptions.score.player < score.winner
  
  startNextRound
    ? dispatch(settingBlueAction())
    : dispatch(addWinnerAction({ winner: playerName, date: Date.now() }))
}