import { combineReducers } from 'redux';

import { settingsReducer as settings } from '../containers/App/reducers/settings.reducer';
import { winnersReducer as winners } from '../containers/App/reducers/winners.reducer';


export default combineReducers({
  settings,
  winners
});