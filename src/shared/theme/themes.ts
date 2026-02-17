import { ref } from './ref';

export const lightTheme = {
  name: 'light',
  colors: {
    ...ref,
    background: ref.white,
    text: ref.black,
  },
};

export const darkTheme = {
  name: 'dark',
  colors: {
    ...ref,
    background: ref.black,
    text: ref.white,
  },
};
