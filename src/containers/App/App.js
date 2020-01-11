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
import { startGameAction } from './actions/startGame.action';
import { resetScoreAction } from './actions/resetScore.action';
import { setGreenAction } from './actions/setGreen.action';
import { settingRedAction } from './actions/settingRed.action';
import { settingRedCancelledAction  } from './actions/settingRedCancelled.action';
import './App.css';

const  App = (props) => {
const { settings, winners, gameStatus } = props;
const { getSettings, getWinners } = props;
const { setModeOptions, setName, startGame, resetScore, setGreen, settingRed, cancelSettingRed } = props;
const { message } = gameStatus;

  useEffect(() => {
    if (winners.length === 0) {
      getSettings();
      getWinners();
    } 
  }, [winners, getSettings, getWinners]);
  
  return (
    <>
      <h1>Game In Dots</h1>
      <div className="inlineBlock">
        <DropDown settings={settings} setModeOptions={setModeOptions}/>
        <InputField setName={setName}/>
        <PlayButton gameStatus={gameStatus} startGame={startGame} resetScore={resetScore} />        
      </div>
      <h3>{ message }</h3>
      <GameField
        gameStatus={gameStatus}
        setGreen={setGreen}
        settingRed={settingRed}
        cancelSettingRed={cancelSettingRed}
      />
      <LeaderBoard winners={winners} />      
    </>  
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
  startGame: (options) => { dispatch(startGameAction(options)); },
  resetScore: (options) => { dispatch(resetScoreAction(options)); },
  setGreen: (options) => { dispatch(setGreenAction(options)); },
  settingRed: (options) => { dispatch(settingRedAction(options)); },
  cancelSettingRed: (options) => { dispatch(settingRedCancelledAction(options)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
