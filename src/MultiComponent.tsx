import React, { useContext } from 'react';
import { ThemeContext } from './shared/theme/model/context/context';

export const Header = () => {
  const theme = useContext(ThemeContext);
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
        backgroundColor: theme?.colors?.sys?.surface ?? "#FFFFFF",
        color: theme?.colors?.sys?.onSurface ?? "#111111",
        fontSize: "20px",
        fontWeight: "700",
      }}
    >
      Welcome to Multi-Component
    </header>
  );
};

export const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <footer
      data-node-id="multi-footer-root"
      data-kind="canvas"
      data-name="Footer"
      data-component-id="multi-footer-component"
      style={{
        width: "100%",
        padding: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme?.colors?.sys?.surface ?? "#EEEEEE",
        color: theme?.colors?.sys?.onSurface ?? "#666666",
        fontSize: "14px",
      }}
    >
      <span data-node-id="multi-footer-text">© 2026 — sibling component in same file</span>
    </footer>
  );
};
