import React, { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

export default function ScreenBlocks() {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        color: theme?.sys?.onSurface ?? '#111111',
      }}
    >
      <section
        style={{
          width: '100%',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#EEEEEE',
        }}
      >
        <h2 style={{ fontSize: '28px', fontWeight: '700' }}>Header</h2>
      </section>

      <section
        style={{
          width: '100%',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
        }}
      >
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
          About
        </button>
      </section>

      <section
        style={{
          width: '100%',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#EEEEEE',
        }}
      >
        <h2 style={{ fontSize: '28px', fontWeight: '700' }}>Footer</h2>
      </section>
    </div>
  );
}
