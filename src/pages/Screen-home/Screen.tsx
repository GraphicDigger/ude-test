import React, { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

export default function ScreenHome() {
  const theme = useContext(ThemeContext);
  return (
    <div
      id="canvas"
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme?.sys?.surface ?? '#FFFFFF',
        color: theme?.sys?.onSurface ?? '#111111',
      }}
    >
      <h1 style={{ fontSize: '32px', fontWeight: '700' }}>Home</h1>
      <p style={{ fontSize: '16px', maxWidth: '480px', textAlign: 'center' }}>
        Welcome to the home screen. Click any element to edit its properties.
      </p>
    </div>
  );
}
