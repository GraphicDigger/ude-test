import React, { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

export const Footer = () => {
  const theme = useContext(ThemeContext);
  const surface = theme?.sys?.surface ?? '#EEEEEE';
  const onSurface = theme?.sys?.onSurface ?? '#666666';
  return (
    <footer
      data-kind="canvas"
      data-name="Footer"
      style={{
        width: "100%",
        padding: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: surface,
        color: onSurface,
        fontSize: "14px",
      }}
    >
      <span data-node-id="multi-footer-text">© 2026 — sibling component in same file</span>
    </footer>
  );
};
