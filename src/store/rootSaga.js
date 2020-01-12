import { all } from 'redux-saga/effects';

import { settingRedActionWatcher } from '../containers/App/sagas/setRed.saga'
import { settingBlueActionWatcher } from '../containers/App/sagas/setBlue.saga'

export default function* rootSaga() {
  yield all([
    settingRedActionWatcher(),
    settingBlueActionWatcher()
  ]);
}