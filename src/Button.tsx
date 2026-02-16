import React from 'react';

export const Button = (props) => {
  return (
    <div 
      data-node-id="screen-canvas-09_button-component"
      data-kind="canvas"
      data-name="Canvas"
      data-component-id="button-component-new"
      style={{
        width: "500px",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
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
          backgroundColor: "#007AFF",
          borderRadius: "8px",
          padding: "0 16px",
          color: "#FFFFFF",
          fontSize: "14px",
          lineHeight: "1"
        }}
      >
        Login
        <div
          data-node-id="element-01-simple"
          data-kind="element"
          data-name="Simple"
          data-component-id="element-00-button"
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            backgroundColor: "#FFFFFF"
          }}
        />
      </div>
    </div>
  );
};