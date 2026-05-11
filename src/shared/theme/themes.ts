import { ref } from './ref';
import { sys } from './sys';
import { typography } from './typography';

const colorRefs = {
  white: ref.white,
  black: ref.black,
  blue: ref.blue,
  size: ref.size,
};

export const lightTheme = {
  name: 'light',
  colors: {
    ...colorRefs,
    ...sys,
  },
  typography,
};

export const darkTheme = {
  name: 'dark',
  colors: {
    ...colorRefs,
    ...sys,
  },
  typography,
};
