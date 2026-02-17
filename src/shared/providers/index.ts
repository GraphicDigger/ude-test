import React, { ComponentType, FC } from 'react';
import { ThemeProvider } from './ThemeProvider';

export const Providers = (Component: ComponentType): FC => () =>
  React.createElement(ThemeProvider, null, React.createElement(Component, null));

export { ThemeProvider } from './ThemeProvider';
