import React from 'react';
import './Word.scss';

interface Props {
  word: string
}

export const Word = (props: Props) => {
  return (
    <div className='word'>
      {
        props.word
      }
    </div>
  )
}