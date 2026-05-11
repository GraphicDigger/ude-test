import { createContext } from 'react';

export interface Theme {
  name: string;
  colors: Record<string, string | number>;
  typography?: Record<string, Record<string, string | number>>;
}

export const ThemeContext = createContext<Theme | null>(null);
