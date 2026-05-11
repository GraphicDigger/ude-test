import { ref } from './ref';
import { sys } from './sys';
import { typography } from './typography';

// FLAT-SPREAD структура: `colors: { ...ref, ...sys }`. Critical для
// buildThemeFromTokenStore — extractor сохраняет spreadNames=['ref', 'sys']
// на коллекции `colors`, что при материализации создаёт виртуальный
// `theme.colors.ref` / `theme.colors.sys` доступ (без физического копирования
// токенов). Это и есть source-of-truth path, который ожидает tokenRef Case 1.

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
