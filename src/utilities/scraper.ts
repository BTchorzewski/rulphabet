import { ChangeEvent } from 'react';

export const focusNext = (e: ChangeEvent<HTMLInputElement>, pronunciation: string, positionInList: number, inc: number): any => {
  if (inc === 4) return null;

  if (e.target.value === pronunciation) {
    const nextSibling = document.querySelector(
      `input[name=field-${positionInList + inc}]`
    ) as HTMLInputElement;
    if (nextSibling !== null) {
      nextSibling.focus()
    }
    if (nextSibling === null) {
      return focusNext(e, pronunciation, positionInList, ++inc)
    }
  }
}