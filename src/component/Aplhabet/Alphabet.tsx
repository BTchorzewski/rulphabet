import React, { useContext } from "react";
import './Alphabet.scss';
import {alphabet} from '../../utilities/alphabet';
import { SignContext } from '../../context/sign-context';

export const Alphabet = () => {
  const {globalSign} = useContext(SignContext);
  return (
    <div className="Alphabet">
      {
        alphabet.map(el=>{
          return globalSign !== el.sign
            ? <div className='Alphabet__item'>
            <div className="Alphabet__origin">{el.sign}</div>
            <div className="Alphabet__pronunciation">{el.pronunciation}</div>
              </div>
            :<div className='Alphabet__item Alphabet__item--focus'>
              <div className="Alphabet__origin">{el.sign}</div>
              <div className="Alphabet__pronunciation">{el.pronunciation}</div>
            </div>

        })
      }
    </div>
  )
}