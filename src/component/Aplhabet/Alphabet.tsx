import React from "react";
import './Alphabet.scss';
import {alphabet} from '../../utilities/alphabet';

export const Alphabet = () => {
  return (
    <div className="Alphabet">
      {
        alphabet.map(el=>{
          return <div className='Alphabet__item'>
            <div className="Alphabet__origin">{el.sign}</div>
            <div className="Alphabet__pronunciation">{el.pronunciation}</div>
          </div>
        })
      }
    </div>
  )
}