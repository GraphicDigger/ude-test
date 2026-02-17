import React from 'react';
import { ThemeContext } from '../theme';
import { lightTheme } from '../theme/themes';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={lightTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
