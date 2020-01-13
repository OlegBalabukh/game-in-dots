import React, { useEffect } from 'react';
import { connect } from "react-redux";

import DropDown from '../../components/DropDown/DropDown';
import InputField from '../../components/InputField/InputField';
import PlayButton from '../../components/PlayButton/PlayButton';
import GameField from '../../components/GameField/GameField';
import LeaderBoard from '../../components/LeaderBoard/LeaderBoard';
import { getSettingsAction } from './actions/getSettings.action';
import { getWinnersAction } from './actions/getWinners.action';
import { setModeOptionsAction } from './actions/setModeOptions.action';
import { setNameAction } from './actions/setName.action';
import { gameStartedAction } from './actions/gameStarted.action';
import { gameRestartedAction } from './actions/gameRestarted.action';
import { setGreenAction } from './actions/setGreen.action';
import { settingRedAction } from './actions/settingRed.action';
import { settingRedCancelledAction  } from './actions/settingRedCancelled.action';
import './App.css';

const  App = (props) => {
const { settings, winners, gameStatus } = props;
const { getSettings, getWinners } = props;
const { setModeOptions, setName, gameStart, gameRestart, setGreen, settingRed, cancelSettingRed } = props;
const { message, play } = gameStatus;

  useEffect(() => {
    if (winners.length === 0) {
      getSettings();
      getWinners();
    } 
  }, [winners, getSettings, getWinners]);
  
  return (
    <div className="main">
      <div className="left section">
        <div className="settings">
          <DropDown
            settings={settings}
            setModeOptions={setModeOptions}
            play={play}
          />
          <InputField setName={setName}/>
          <PlayButton
            gameStatus={gameStatus}
            gameStart={gameStart}
            gameRestart={gameRestart}
          />        
        </div>      
        <div className="gameField">
          <h3 id="message">{ message }</h3>     
          <GameField
            gameStatus={gameStatus}
            setGreen={setGreen}
            settingRed={settingRed}
            cancelSettingRed={cancelSettingRed}
          />
        </div>
      </div>      
      <div className="right section">
        <LeaderBoard winners={winners} />
      </div>     
    </div>  
  )
} 

const mapStateToProps = (state) => ({
  settings: state.settings,
  winners: state.winners,
  gameStatus: state.gameStatus
});

const mapDispatchToProps = (dispatch) => ({
  getSettings: () => { dispatch(getSettingsAction()); },
  getWinners: () => { dispatch(getWinnersAction()); },  
  setModeOptions: (options) => { dispatch(setModeOptionsAction(options)); },
  setName: (name) => { dispatch(setNameAction(name)); },
  gameStart: () => { dispatch(gameStartedAction()); },
  gameRestart: (fieldSize) => { dispatch(gameRestartedAction(fieldSize)); },
  setGreen: (options) => { dispatch(setGreenAction(options)); },
  settingRed: (options) => { dispatch(settingRedAction(options)); },
  cancelSettingRed: (options) => { dispatch(settingRedCancelledAction(options)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
