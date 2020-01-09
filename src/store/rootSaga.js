import { all } from 'redux-saga/effects';

import { settingRedActionWatcher } from '../containers/App/sagas/setRed.saga'

export default function* rootSaga() {
  yield all([
    settingRedActionWatcher()
  ]);
}