import React from 'react';
import './Sentence.scss';
import { Word } from './Word';

interface Prop {
  sentence: string;
}

export const Sentence = (props: Prop) => {
  const regx = /[ ]/ig
  const words = props.sentence.split(regx)
  return (
    <div className="sentence">
      {
        words.map(el => <Word word={el}/>)
      }
    </div>
  )
}