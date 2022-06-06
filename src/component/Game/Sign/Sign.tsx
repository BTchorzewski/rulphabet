import React, { ChangeEvent, useContext, useMemo, useState } from 'react';
import { Alphabet } from '../../../utilities/types';
import './Sign.scss';
import { SignContext } from '../../../context/sign-context';
import { Answer } from './Answer';
import { focusNextInput } from '../../../utilities/scraper';

interface Props extends Alphabet {
  omit: boolean;
  positionInList: number;
}

let inc = 1;
export const Sign = ({ sign, spelling, pronunciation, omit, positionInList }: Props) => {
  const [answer, setAnswer] = useState<string>('');
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);

    focusNextInput(e, spelling, positionInList, 1);

  };
  const { setGlobalSign } = useContext(SignContext)
  const checkedAnswer = omit || answer === spelling;

  const memoizedResults = useMemo(() => {
    return checkedAnswer
      ?
      <Answer
        answer={answer}
        omit={omit}
        sign={sign}
      />
      :
      <input
        type="text"
        value={answer}
        className="sign__input"
        name={`field-${positionInList}`}
        onChange={inputHandler}
        onFocus={(e) => {
          setGlobalSign(sign);
        }}
        autoFocus={positionInList === 0}
      />

  }, [answer])

  return (
    <div
      className="sign">
      <p className="sign__question">{sign}</p>
      {
        memoizedResults
      }
    </div>
  );
}