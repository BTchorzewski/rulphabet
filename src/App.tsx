import React from 'react';
import './App.scss';
import { Game } from './component/Game/Game';
import { song } from './utilities/song-text';

function App() {
  return (
    <div className="App">

      <Game song={song}/>

    </div>
  );
}

export default App;
