import {
  put,
  take,
  select,
  cancel,
  call,
  delay,
  fork
} from 'redux-saga/effects';

import {
  SETTING_BLUE,
  SETTING_BLUE_CANCELLED,
  SETTING_BLUE_COMPLETED
} from '../constants';

import { settingBlueCompletedAction } from '../actions/settingBlueCompleted.action';

const gameStatusParams = ({
  gameStatus: { play, delay, gameField, emptySquares }
}) => ({
  play,
  delay,
  gameField,
  emptySquares
});

function* settingBlue() {
  yield take(SETTING_BLUE);

  const data = yield select(gameStatusParams);
  yield delay(data.delay);
  yield put(settingBlueCompletedAction(data));
}

function* cancelSettingBlue(task) {
  yield cancel(task);
}

export function* settingBlueActionWatcher() {
  while (true) {
    const task = yield fork(settingBlue);

    yield take([SETTING_BLUE_CANCELLED, SETTING_BLUE_COMPLETED]);
    yield call(cancelSettingBlue, task);
  }
}
