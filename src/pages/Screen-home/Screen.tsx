import React from 'react';
import { sys } from '../../shared/theme';

export default function ScreenHome() {
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
        backgroundColor: sys.color.surface,
        color: sys.color.onSurface,
      }}
    >
      <h1 style={{ fontSize: '32px', fontWeight: '700' }}>Home</h1>
      <p style={{ fontSize: '16px', maxWidth: '480px', textAlign: 'center' }}>
        Welcome to the home screen. Click any element to edit its properties.
      </p>
    </div>
  );
}
