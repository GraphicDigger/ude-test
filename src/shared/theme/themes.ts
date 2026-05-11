import { ref } from './ref';
import { sys } from './sys';
import { typography } from './typography';

// Структура theme.colors совпадает с тем, что Button.tsx и Screen*.tsx уже
// читают: `theme?.colors?.sys?.primary` etc. Раньше colors был FLAT spread
// (`{ ...ref, ...sys }`), и эти пути падали в `?? fallback` runtime. Также
// это структура, которую ожидает write-path tokenRef builder:
// `theme.colors.<collectionName>.<tokenName>` (см. `tokenRef.ts` case 1).

export const lightTheme = {
  name: 'light',
  colors: {
    ref,
    sys,
  },
  typography,
};

export const darkTheme = {
  name: 'dark',
  colors: {
    ref,
    sys,
  },
  typography,
};
