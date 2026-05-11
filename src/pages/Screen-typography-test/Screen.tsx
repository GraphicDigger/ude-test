import { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

export default function ScreenTypographyTest() {
  const theme = useContext(ThemeContext);
  const typography = theme?.typography ?? {};

  return (
    <div
      id="canvas"
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '48px',
        backgroundColor: theme?.colors?.surface ?? '#FFFFFF',
        color: theme?.colors?.onSurface ?? '#111111',
      }}
    >
      <h1 style={{ fontSize: '24px', fontWeight: 700 }}>Typography preset test fixtures</h1>

      <p
        data-test="element-a-raw"
        style={{
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '24px',
          color: '#111111',
        }}
      >
        Element A — all raw literals. Capture сюда должен сохранить primitives.
      </p>

      <p
        data-test="element-b-refs"
        style={{
          fontFamily: typography?.body?.fontFamily,
          fontSize: typography?.body?.fontSize,
          fontWeight: typography?.body?.fontWeight,
          lineHeight: typography?.body?.lineHeight,
          color: theme?.colors?.onSurface,
        }}
      >
        Element B — all token references. Capture должен сохранить TokenReference объекты,
        не resolved primitives (D4 — critical regression target для Phase 1 TASK-1.1).
      </p>

      <p
        data-test="element-c-mixed"
        style={{
          fontSize: typography?.body?.fontSize,
          fontWeight: 400,
          lineHeight: '24px',
          color: '#111111',
        }}
      >
        Element C — mixed: fontSize через token ref, остальное raw. Capture должен
        сохранить смешанный shape.
      </p>
    </div>
  );
}
