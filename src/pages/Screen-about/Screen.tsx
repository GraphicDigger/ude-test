import React from 'react';
import { sys } from '../../shared/theme';

export default function ScreenAbout() {
  return (
    <div
      id="canvas"
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '64px',
        backgroundColor: sys.color.surface,
        color: sys.color.onSurface,
      }}
    >
      <h1 style={{ fontSize: '28px', fontWeight: '700' }}>About</h1>
      <p style={{ fontSize: '14px', lineHeight: '20px' }}>
        Sibling screen for testing multi-screen routing. Edit text, layout, fill — focus persists.
      </p>
      <button
        style={{
          padding: '12px 20px',
          backgroundColor: sys.color.primary,
          color: sys.color.onPrimary,
          border: 'none',
          borderRadius: sys.radius.md,
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '600',
        }}
      >
        Continue
      </button>
    </div>
  );
}
