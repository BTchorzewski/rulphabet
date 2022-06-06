import React from 'react';

interface Props {
  omit: boolean;
  answer: string;
  sign: string;
}

export const Answer = ({ sign, answer, omit }: Props) => {

  return (
    <p>
      {
        omit
          ?
          sign
          :
          answer}
    </p>
  )
}