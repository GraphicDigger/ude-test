import React, { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

export const Button = ({
  color = '#555555',
  variant = 'primary',
}: {
  color: string;
  variant: 'primary' | 'secondary' | 'danger';
}) => {
  const theme = useContext(ThemeContext);
  const variantBg =
    variant === 'primary'
      ? theme?.sys?.primary ?? '#2563EB'
      : variant === 'secondary'
        ? '#6B7280'
        : '#DC2626';
  const btnTextColor = theme?.sys?.onPrimary ?? '#FFFFFF';
  const btnSurface = theme?.sys?.surface ?? '#FFFFFF';
  void color;

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
          backgroundColor: variantBg,
          borderRadius: "8px",
          padding: "0 16px",
          color: btnTextColor,
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
            backgroundColor: btnSurface
          }}></div>
      </button>
  );
};
