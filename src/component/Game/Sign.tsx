import React, { ChangeEvent, useContext, useState } from 'react';
import { Alphabet } from '../../utilities/types';
import './Sign.scss';
import { SignContext } from '../../context/sign-context';

interface Props extends Alphabet {
  omit: boolean;
}

export const Sign = ({ sign, spelling, pronunciation, omit }: Props) => {
  const [answer, setAnswer] = useState<string>('');
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };
  const {setGlobalSign} = useContext(SignContext)
  return (
    <div
      className="sign">
      <p className="sign__question">{sign}</p>
      {
        omit || answer === pronunciation ? <p className="sign__answer">{
            omit ? sign : answer
          }</p> :
          <input
            type="text"
            value={answer}
            className="sign__input"
            onChange={inputHandler}
            onFocus={(e)=>{
              setGlobalSign(sign);
            }
            }
          />
      }
    </div>
  );
}