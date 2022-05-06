import React, { useState } from 'react';
import './App.scss';
import { Sign } from './component/Sign';
import { alphabet } from './utilities/alphabet';
import { song } from './utilities/song-text';

function App() {
  console.log(song.split(''))
  const [text, setText] = useState<string>(song)
  return (
    <div className="App">
      <div className="App__display">
        {/*@todo dodać podział na */}
        {
          song.split('').map(el => {
            const foundSign = alphabet.filter(sign => sign.sign === el);
            if (foundSign.length < 1) return <Sign sign={el} omit={true} spelling={el} pronunciation={el}/>;
            return <Sign sign={el} omit={false} pronunciation={foundSign[0].pronunciation}
                         spelling={foundSign[0].spelling}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
