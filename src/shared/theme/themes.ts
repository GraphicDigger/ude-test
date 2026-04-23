import { ref } from './ref';
import { sys } from './sys';

export const lightTheme = {
  name: 'light',
  colors: {
    ...ref,
    ... sys,
  },
};

export const darkTheme = {
  name: 'dark',
  colors: {
    ...ref,
    ...sys,
  },
};
