import { createContext } from 'react';

export interface TypographyPreset {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string | number;
  lineHeight?: string;
  marginBottom?: string;
}

export interface Theme {
  name: string;
  colors: Record<string, string>;
  typography?: Record<string, TypographyPreset>;
}

export const ThemeContext = createContext<Theme | null>(null);
