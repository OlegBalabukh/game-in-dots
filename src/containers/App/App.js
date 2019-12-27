import React from 'react';

import DropDown from '../../components/DropDown/DropDown';
import InputField from '../../components/InputField/InputField';
import PlayButton from '../../components/PlayButton/PlayButton';
import './App.css';

const App = () => (
  <>
    <h1>Game In Dots</h1>
    <div className="inlineBlock">
      <DropDown/>
      <InputField/>
      <PlayButton/>
    </div>
    
  </>
  
)

export default App;
