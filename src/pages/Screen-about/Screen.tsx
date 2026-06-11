import React, { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

export default function ScreenAbout() {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '64px',
        backgroundColor: theme?.sys?.surface ?? '#FFFFFF',
        color: theme?.sys?.onSurface ?? '#111111',
      }}
    >
      <h1 style={{ fontSize: '28px', fontWeight: '700' }}>About</h1>
      <p style={{ fontSize: '14px', lineHeight: '20px' }}>
        Sibling screen for testing multi-screen routing. Edit text, layout, fill — focus persists.
      </p>
      <button
        style={{
          padding: '12px 20px',
          backgroundColor: theme?.sys?.primary ?? '#3B82F6',
          color: theme?.sys?.onPrimary ?? '#FFFFFF',
          border: 'none',
          borderRadius: '8px',
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
