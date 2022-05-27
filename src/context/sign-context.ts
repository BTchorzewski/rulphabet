import { createContext } from 'react';

export const SignContext = createContext({
  globalSign: '',
  setGlobalSign:(s:string)=>{}
})