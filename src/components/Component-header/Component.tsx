import React, { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

export const Header = () => {
  const theme = useContext(ThemeContext);
  const surface = theme?.sys?.surface ?? '#FFFFFF';
  const onSurface = theme?.sys?.onSurface ?? '#111111';
  return (
    <header
      data-node-id="multi-header-root"
      data-kind="canvas"
      data-name="Header"
      data-component-id="multi-header-component"
      style={{
        width: "100%",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: surface,
        color: onSurface,
        fontSize: "20px",
        fontWeight: "700",
      }}
    >
      Welcome to Multi-Component
    </header>
  );
};
