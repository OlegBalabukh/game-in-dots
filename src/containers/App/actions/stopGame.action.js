import { STOP_GAME } from '../constants';
import { settingRedCancelledAction } from './settingRedCancelled.action';
import { settingBlueCancelledAction } from './settingBlueCancelled.action';

export const stopGameAction = () => dispatch => {
  dispatch(settingRedCancelledAction());
  dispatch(settingBlueCancelledAction());
  dispatch({ type: STOP_GAME });
};
