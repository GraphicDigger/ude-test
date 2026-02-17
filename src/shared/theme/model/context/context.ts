import { createContext } from 'react';

export interface Theme {
  name: string;
  colors: Record<string, string>;
}

export const ThemeContext = createContext<Theme | null>(null);
