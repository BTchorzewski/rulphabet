import { createContext } from 'react';

export const FocuseContext = createContext({
  focusedInputPosition: 0,
  setFocusedInputPosition: (index: number) => {
  }
})