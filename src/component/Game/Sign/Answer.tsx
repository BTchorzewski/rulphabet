import React, { useContext, useEffect } from 'react';
import { FocuseContext } from '../../../context/focuse-context';

interface Props {
  omit: boolean;
  answer: string;
  sign: string;
  positionInList: number;
}

export const Answer = ({ sign, answer, omit, positionInList }: Props) => {
  const { focusedInputPosition, setFocusedInputPosition } = useContext(FocuseContext)
  useEffect(() => {

    setFocusedInputPosition(positionInList++)
  }, [])
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