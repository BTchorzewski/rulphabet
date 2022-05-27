import React, { useState } from 'react';
import './App.scss';
import {Alphabet} from "./component/Aplhabet/Alphabet";
import {Game} from "./component/Game/Game";
import { SignContext } from './context/sign-context';

function App() {
  const [globalSign, setGlobalSign] = useState('')


  return (
    <div className="App">
    <SignContext.Provider value={{globalSign, setGlobalSign}}>
      <Game/>
      <Alphabet/>
    </SignContext.Provider>
    </div>
  );
}

export default App;
