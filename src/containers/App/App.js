import React, { useEffect } from 'react';
import { connect } from "react-redux";

import DropDown from '../../components/DropDown/DropDown';
import InputField from '../../components/InputField/InputField';
import PlayButton from '../../components/PlayButton/PlayButton';
import GameField from '../../components/GameField/GameField';
import LeaderBoard from '../../components/LeaderBoard/LeaderBoard';
import { getSettingsAction } from './actions/getSettings.action';
import { getWinnersAction  } from './actions/getWinners.action';
import { setModeOptionsAction  } from './actions/setModeOptions.action';
import { setNameAction  } from './actions/setName.action';
import { startGameAction  } from './actions/startGame.action';
import './App.css';

const  App = (props) => {
const { settings, winners, gameStatus } = props;
const { getSettings, getWinners } = props;
const { setModeOptions, setName, startGame } = props;

  useEffect(() => {
    if (winners.length === 0) {
      getSettings();
      getWinners();
    } 
  }, [winners, getSettings, getWinners]);
  
  return (
    <>
      {/* <h1>Game In Dots</h1> */}
      <div className="inlineBlock">
        <DropDown settings={settings} setModeOptions={setModeOptions}/>
        <InputField setName={setName}/>
        <PlayButton field={gameStatus.field} playerName={gameStatus.name} startGame={startGame} />        
      </div>
      <GameField field={gameStatus.gameField} />
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
  startGame: (boolean) => { dispatch(startGameAction(boolean)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
