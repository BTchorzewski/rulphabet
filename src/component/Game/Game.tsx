import React from 'react';
import './Game.scss';
import { alphabet } from '../../utilities/alphabet';
import { Sign } from './Sign';

interface Props {
  song: string
}

export const Game = (props: Props) => {
  return (
    <div className="game">
      {
        props.song.split('').map(el => {
          const foundSign = alphabet.filter(sign => sign.sign === el);
          if (foundSign.length < 1) return <Sign sign={el} omit={true} spelling={el} pronunciation={el}/>;
          return <Sign sign={el} omit={false} pronunciation={foundSign[0].pronunciation}
                       spelling={foundSign[0].spelling}/>
        })
      }
    </div>
  )
}