import { STOP_GAME } from '../constants';
import { settingRedCancelledAction } from './settingRedCancelled.action'

export const stopGameAction = () => dispatch => {

  dispatch(settingRedCancelledAction())

  dispatch({ type: STOP_GAME })
}