import React, { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

export default function ScreenBlocks() {
  const theme = useContext(ThemeContext);
  const surface = theme?.sys?.surface ?? '#FFFFFF';
  const onSurface = theme?.sys?.onSurface ?? '#111111';
  const onSurfaceSecondary = theme?.sys?.onSurfaceSecondary ?? '#6B7280';
  const outline = theme?.sys?.outline ?? '#E5E5E5';

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: surface,
        color: onSurface,
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '46px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0A0A0A',
          color: '#FFFFFF',
        }}
      >
        <a
          href="/pages/Screen-about"
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            fontSize: '14px',
            color: '#FFFFFF',
            textDecoration: 'none',
          }}
        >
          Orchestrate revenue agents with the new Workflows
          <span style={{ fontSize: '14px' }}>&#8594;</span>
        </a>
        <button
          style={{
            position: 'absolute',
            top: '50%',
            right: '24px',
            transform: 'translateY(-50%)',
            width: '20px',
            height: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#FFFFFF',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          &#10005;
        </button>
      </div>

      <header
        style={{
          width: '100%',
          height: '72px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 32px',
          backgroundColor: surface,
          borderBottom: `1px solid ${outline}`,
        }}
      >
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: `4px solid ${onSurface}`,
              }}
            />
            <span style={{ fontSize: '24px', fontWeight: '700', letterSpacing: '-0.02em' }}>attio</span>
          </div>

          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a
              href="/pages/Screen-home"
              style={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center',
                fontSize: '15px',
                color: onSurface,
                textDecoration: 'none',
              }}
            >
              Sync Design & Code
            </a>
            <a
              href="/pages/Screen-about"
              style={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center',
                fontSize: '15px',
                color: onSurface,
                textDecoration: 'none',
              }}
            >
              Design System
            </a>
            <a
              href="/pages/Screen-typography-test"
              style={{ fontSize: '15px', color: onSurface, textDecoration: 'none' }}
            >
              Wireframes
            </a>
            <a
              href="/pages/Screen-link-examples"
              style={{ fontSize: '15px', color: onSurface, textDecoration: 'none' }}
            >
              Database
            </a>
          </nav>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button
            style={{
              height: '36px',
              padding: '0 16px',
              backgroundColor: surface,
              color: onSurface,
              border: `1px solid ${outline}`,
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Sign in
          </button>
          <button
            style={{
              height: '36px',
              padding: '0 16px',
              backgroundColor: '#26262B',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Start for free
          </button>
        </div>
      </header>

      <section
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '104px 32px 120px',
          backgroundColor: surface,
        }}
      >
        <a
          href="/pages/Screen-about"
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            height: '32px',
            padding: '0 14px',
            border: `1px solid ${outline}`,
            borderRadius: '16px',
            fontSize: '14px',
            color: onSurface,
            textDecoration: 'none',
          }}
        >
          A page for demonstrating wireframe blocks
          <span style={{ fontSize: '12px', color: onSurfaceSecondary }}>&#8250;</span>
        </a>

        <h1
          style={{
            maxWidth: '900px',
            fontSize: '76px',
            fontWeight: '700',
            lineHeight: '1.05',
            letterSpacing: '-0.03em',
            textAlign: 'center',
          }}
        >
          Wireframe blocks and contexts for agents
        </h1>

        <p
          style={{
            maxWidth: '420px',
            fontSize: '18px',
            lineHeight: '28px',
            textAlign: 'center',
            color: onSurfaceSecondary,
          }}
        >
          XLooop is a universal AI-powered design and development environment
        </p>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '8px' }}>
          <button
            style={{
              height: '40px',
              padding: '0 18px',
              backgroundColor: surface,
              color: onSurface,
              border: `1px solid ${outline}`,
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Talk to sales
          </button>
          <button
            style={{
              height: '40px',
              padding: '0 18px',
              backgroundColor: '#26262B',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            About
          </button>
        </div>
      </section>
    </div>
  );
}
