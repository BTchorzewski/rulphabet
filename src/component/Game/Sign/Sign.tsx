import React, { ChangeEvent, useContext, useState } from 'react';
import { Alphabet } from '../../../utilities/types';
import './Sign.scss';
import { SignContext } from '../../../context/sign-context';
import { Answer } from './Answer';
import { FocuseContext } from '../../../context/focuse-context';

interface Props extends Alphabet {
  omit: boolean;
  positionInList: number;
}

export const Sign = ({ sign, spelling, pronunciation, omit, positionInList }: Props) => {
  const [answer, setAnswer] = useState<string>('');
  const { focusedInputPosition, setFocusedInputPosition } = useContext(FocuseContext);
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };
  const { setGlobalSign } = useContext(SignContext)
  const checkedAnswer = omit || answer === pronunciation;
  const isFocused = positionInList === focusedInputPosition;
  return (
    <div
      className="sign">
      <p className="sign__question">{sign}</p>
      {
        checkedAnswer
          ?
          <Answer
            answer={answer}
            omit={omit}
            sign={sign}
            positionInList={positionInList}
          />
          :
          <input
            type="text"
            value={answer}
            className="sign__input"
            onChange={inputHandler}
            onFocus={(e) => {
              setGlobalSign(sign);
            }}
            autoFocus={isFocused}
          />
      }
    </div>
  );
}