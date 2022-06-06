import React, { useState } from 'react';
import './App.scss';
import { Alphabet } from "./component/Aplhabet/Alphabet";
import { Game } from "./component/Game/Game";
import { SignContext } from './context/sign-context';
import { FocuseContext } from './context/focuse-context';
import { songState } from './utilities/song-text';
import { GameContext } from './context/game-context';
import { Question } from './utilities/types';

function App() {

  const [globalSign, setGlobalSign] = useState('')
  const [focusedInputPosition, setFocusedInputPosition] = useState(0);
  const [game, setGame] = useState<Question[]>(songState)

  return (
    <div className="App">
      {/*// @ts-ignore*/}
      <GameContext.Provider value={{ game, setGame }}>
        <FocuseContext.Provider value={{ focusedInputPosition, setFocusedInputPosition }}>
          <SignContext.Provider value={{ globalSign, setGlobalSign }}>
            <Game/>
            <Alphabet/>
          </SignContext.Provider>
        </FocuseContext.Provider>
      </GameContext.Provider>
    </div>
  );
}

export default App;
