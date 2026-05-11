import { ref } from './ref';
import { typography } from './typography';

// Inline nested structure под `theme.colors.<collection>.<token>` paths,
// которые ожидает tokenRef builder (Case 1, theme-detected scope).
// shorthand `{ ref, sys }` НЕ работает — extractor видит Identifier, не
// ObjectExpression. Нужны inline-объекты с явными полями.

export const lightTheme = {
  name: 'light',
  colors: {
    ref: {
      white: ref.white,
      black: ref.black,
      blue: ref.blue,
      size: ref.size,
    },
    sys: {
      surface: ref.white,
      onSurface: ref.black,
      primary: ref.blue,
      onPrimary: ref.white,
    },
  },
  typography,
};

export const darkTheme = {
  name: 'dark',
  colors: {
    ref: {
      white: ref.white,
      black: ref.black,
      blue: ref.blue,
      size: ref.size,
    },
    sys: {
      surface: ref.black,
      onSurface: ref.white,
      primary: ref.blue,
      onPrimary: ref.white,
    },
  },
  typography,
};
