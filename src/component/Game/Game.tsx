import React from 'react';
import './Game.scss';
import { Sentence } from './Sentence';

interface Props {
  song: string
}

export const Game = (props: Props) => {
  const sentenceReg = /[.]/gi;
  const sentences = props.song.split(sentenceReg);
  return (
    <div className="game">
      {
        sentences.map(sentence => <Sentence sentence={sentence}></Sentence>)
      }
    </div>
  )
}