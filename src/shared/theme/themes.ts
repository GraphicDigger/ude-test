import { ref } from './ref';
import { sys } from './sys';
import { typography } from './typography';

export const lightTheme = {
  name: 'light',
  colors: {
    ...ref,
    ...sys,
  },
  typography,
};

export const darkTheme = {
  name: 'dark',
  colors: {
    ...ref,
    ...sys,
  },
  typography,
};
