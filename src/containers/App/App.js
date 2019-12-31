import React, { useEffect } from 'react';
import { connect } from "react-redux";

import DropDown from '../../components/DropDown/DropDown';
import InputField from '../../components/InputField/InputField';
import PlayButton from '../../components/PlayButton/PlayButton';
import GameField from '../../components/GameField/GameField';
import LeaderBoard from '../../components/LeaderBoard/LeaderBoard';
import { getSettingsAction } from './actions/getSettings.action';
import { getWinnersAction  } from './actions/getWinners.action';
import './App.css';

const  App = (props) => {
const { settings, winners } = props;
const { getSettings, getWinners } = props;

  // console.log(settings)
  // console.log(winners)

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
        <DropDown />
        <InputField />
        <PlayButton />        
      </div>
      <GameField settings={settings} />
      <LeaderBoard winners={winners} />
      
    </>  
  )
} 

const mapStateToProps = (state) => ({
  settings: state.settings,
  winners: state.winners
});

const mapDispatchToProps = (dispatch) => ({
  getSettings: () => { dispatch(getSettingsAction()); },
  getWinners: () => { dispatch(getWinnersAction()); }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
