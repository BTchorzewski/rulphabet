import React, { useState } from 'react';
import './App.scss';
import {Alphabet} from "./component/Aplhabet/Alphabet";
import {Game} from "./component/Game/Game";

function App() {
  return (
    <div className="App">
      <Game/>
      <Alphabet/>
    </div>
  );
}

export default App;
