import React from 'react';
import { sys } from './shared/theme';

export const Button = (_props: Record<string, unknown>) => {
  return (
      <button
        data-node-id="element-00-button"
        data-kind="element"
        data-name="Button"
        data-component-id="screen-canvas-09_button-component"
        style={{
          position: "relative",
          display: "flex",
          gap: "16px",
          alignItems: "center",
          justifyContent: "center",
          width: "max-content",
          height: "40px",
          backgroundColor: sys.color.primary,
          borderRadius: sys.radius.md,
          padding: "0 16px",
          color: sys.color.onPrimary,
          fontSize: "14px",
          lineHeight: "1",
          border: "none"
        }}>
        Your focus determines your reality
        <div
          data-node-id="element-01-simple"
          data-kind="element"
          data-name="Simple"
          data-component-id="element-00-button"
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            backgroundColor: sys.color.surface
          }}></div>
      </button>
  );
};
