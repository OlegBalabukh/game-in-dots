import { put, take, select, cancel, call, delay, fork } from 'redux-saga/effects';

import { settingRedCompletedAction } from '../actions/settingRedCompleted.action'
import { SETTING_RED, SETTING_RED_CANCELLED, SETTING_RED_COMPLETED } from '../constants'

const gameStatusParams = ({ gameStatus: { activeSquare, gameField, delay, emptySquares, score } }) => ({
  activeSquare,
  gameField,
  emptySquares,
  delay,
  score
});

function* settingRed() {
  yield take(SETTING_RED);

  const data = yield select(gameStatusParams);
  yield delay(data.delay);  
  yield put(settingRedCompletedAction(data));
}

function* cancelSettingRed(task) {
  yield cancel(task);
}

export function* settingRedActionWatcher() {
  while (true) {
    const task = yield fork(settingRed);
    
    yield take([SETTING_RED_CANCELLED, SETTING_RED_COMPLETED]);
    yield call(cancelSettingRed, task);
  }
}