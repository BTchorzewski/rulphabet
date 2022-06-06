import { Alphabet } from '../component/Aplhabet/Alphabet';

export interface Alphabet {
  sign: string;
  spelling: string
  pronunciation: string
}

export interface Question extends Omit<Alphabet, 'spelling' | 'pronunciation'> {
  answer: string;
}