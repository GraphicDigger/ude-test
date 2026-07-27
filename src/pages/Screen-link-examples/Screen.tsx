import React, { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

export default function ScreenLinkExamples() {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        alignItems: 'flex-start',
        padding: '64px',
        backgroundColor: theme?.sys?.surface ?? '#FFFFFF',
        color: theme?.sys?.onSurface ?? '#111111',
      }}
    >
      <h1 style={{ fontSize: '28px', fontWeight: '700' }}>Link Examples</h1>
      <p style={{ fontSize: '14px', lineHeight: '20px', maxWidth: '480px' }}>
        Two ways an `&lt;a&gt;` tag can appear in source: as the element itself, or as a
        wrapper around another element. LinkControl must tell them apart.
      </p>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600' }}>1. Plain `&lt;a&gt;` — direct element</h2>
        <p style={{ fontSize: '13px', color: theme?.sys?.onSurfaceSecondary ?? '#666666' }}>
          The `&lt;a&gt;` is the leaf element itself — a text link, tagged directly (e.g. via
          TagControl). No wrapped child.
        </p>
        <a href="https://example.com" style={{ fontSize: '16px', color: theme?.sys?.primary ?? '#3B82F6' }}>
          Plain link text
        </a>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600' }}>2. `&lt;a&gt;` wrapping a single element</h2>
        <p style={{ fontSize: '13px', color: theme?.sys?.onSurfaceSecondary ?? '#666666' }}>
          The `&lt;a&gt;` wraps one JSXElement child — same shape LinkControl's `wrapWith`
          produces. Focus should stay on the wrapped heading, not jump to the `&lt;a&gt;`.
        </p>
        <a href="/pages/Screen-about" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700' }}>Wrapped heading</h3>
        </a>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600' }}>3. `&lt;a&gt;` wrapping multiple children (card)</h2>
        <p style={{ fontSize: '13px', color: theme?.sys?.onSurfaceSecondary ?? '#666666' }}>
          A link wrapping several elements at once — nested-click resolution (closest
          `&lt;a href&gt;` from the click point) matters here.
        </p>
        <a
          href="/pages/Screen-typography-test"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            width: '240px',
            padding: '16px',
            border: `1px solid ${theme?.sys?.outline ?? '#DDDDDD'}`,
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <span style={{ fontSize: '16px', fontWeight: '600' }}>Card title</span>
          <span style={{ fontSize: '13px', color: theme?.sys?.onSurfaceSecondary ?? '#666666' }}>
            Card description text
          </span>
        </a>
      </section>
    </div>
  );
}
