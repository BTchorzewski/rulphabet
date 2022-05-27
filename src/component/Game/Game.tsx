import React, { useContext } from "react";
import './Game.scss';
import { alphabet } from "../../utilities/alphabet";
import { Sign } from "./Sign/Sign";
import { FocuseContext } from '../../context/focuse-context';
import { GameContext } from '../../context/game-context';

export const Game = () => {
  const { focusedInputPosition } = useContext(FocuseContext);
  const { game } = useContext(GameContext)
  console.log({ game })
  return <div className='Game'>
    {
      game.map((item, i) => {
        const foundSign = alphabet.filter(sign => sign.sign === item.sign);
        if (foundSign.length < 1) return <Sign positionInList={i} key={i} sign={item.sign} omit={true}
                                               spelling={item.sign} pronunciation={item.sign}/>;
        return <Sign
          positionInList={i}
          key={i}
          sign={item.sign}
          omit={false}
          pronunciation={foundSign[0].pronunciation}
          spelling={foundSign[0].spelling}
        />
      })
      // song.split('').map((el, i) => {
      //   const foundSign = alphabet.filter(sign => sign.sign === el);
      //   if (foundSign.length < 1) return <Sign positionInList={i} key={i} sign={el} omit={true} spelling={el} pronunciation={el}/>;
      //   return <Sign
      //     positionInList={i}
      //     key={i}
      //     sign={el}
      //     omit={false}
      //     pronunciation={foundSign[0].pronunciation}
      //     spelling={foundSign[0].spelling}
      //   />
      // })
    }
  </div>
};