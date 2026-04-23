import React, { useContext } from 'react';
import { ThemeContext } from './shared/theme/model/context/context';

export const Button = (_props: Record<string, unknown>) => {
  const theme = useContext(ThemeContext);
  const btnColor = theme?.colors?.sys?.primary ?? '#999999';
  const btnTextColor = theme?.colors?.sys?.onPrimary ?? '#111111';

  return (
    <div
      data-node-id="screen-canvas-09_button-component"
      data-kind="canvas"
      data-name="Canvas"
      data-component-id="button-component-new"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme?.colors?.sys?.surface ?? "#FFFFFF",
        flexDirection: "column"
      }}
    >
      <div
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
          backgroundColor: btnColor,
          borderRadius: "8px",
          padding: "0 16px",
          color: btnTextColor,
          fontSize: "14px",
          lineHeight: "1"
        }}>
        TestDrive
        <div
          data-node-id="element-01-simple"
          data-kind="element"
          data-name="Simple"
          data-component-id="element-00-button"
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            backgroundColor: theme?.colors?.sys?.surface
          }}></div>
      </div>
    </div>
  );
};