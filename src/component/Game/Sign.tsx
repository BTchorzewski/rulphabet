import React, { ChangeEvent, useState } from 'react';
import { Alphabet } from '../../utilities/types';
import './Sign.scss';

interface Props extends Alphabet {
  omit: boolean;
}

export const Sign = ({ sign, pronunciation, omit }: Props) => {
  const [answer, setAnswer] = useState<string>('');
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <div
      style={{ borderTop: '1px solid green' }}
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
          />
      }
    </div>
  );
}