import React from "react";
import './Game.scss';
import {song} from "../../utilities/song-text";
import {alphabet} from "../../utilities/alphabet";
import {Sign} from "./Sign";

export const Game = () => {
  return <div className='Game'>
    {
      song.split('').map(el => {
        const foundSign = alphabet.filter(sign => sign.sign === el);
        if (foundSign.length < 1) return <Sign sign={el} omit={true} spelling={el} pronunciation={el}/>;
        return <Sign sign={el} omit={false} pronunciation={foundSign[0].pronunciation}
                     spelling={foundSign[0].spelling}/>
      })
    }
  </div>
}