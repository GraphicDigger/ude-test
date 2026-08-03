import React, { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';
import { Card } from '../../components/Component-card/Component';

/**
 * Экран для проверки повтора по записям.
 *
 * Два контейнера с одинаковой карточкой внутри, но разной природы: слева
 * СОСТАВНОЙ ЭЛЕМЕНТ (разметка живёт здесь же), справа ИНСТАНС компонента
 * `Card`. Повтор по коллекции должен одинаково работать с обоими — на этом
 * экране их видно рядом и разницу сразу заметно.
 */
export default function ScreenRepeatTest() {
  const theme = useContext(ThemeContext);
  const surface = theme?.sys?.surface ?? '#FFFFFF';
  const onSurface = theme?.sys?.onSurface ?? '#111111';
  const onSurfaceSecondary = theme?.sys?.onSurfaceSecondary ?? '#6B7280';
  const outline = theme?.sys?.outline ?? '#E5E5E5';

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '48px 32px',
        backgroundColor: surface,
        color: onSurface,
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', letterSpacing: '-0.02em' }}>Repeat test</h1>
        <p style={{ fontSize: '16px', lineHeight: '24px', color: onSurfaceSecondary }}>
          Слева составной элемент, справа инстанс компонента. Подключите коллекцию к любому из
          контейнеров и сравните результат.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '24px',
            border: `1px dashed ${outline}`,
            borderRadius: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              width: '220px',
              padding: '12px',
              border: `1px solid ${outline}`,
              borderRadius: '12px',
              backgroundColor: surface,
            }}
          >
            <img
              src="/vite.svg"
              alt=""
              style={{
                width: '100%',
                height: '120px',
                objectFit: 'cover',
                borderRadius: '8px',
                backgroundColor: '#F3F4F6',
              }}
            />
            <span style={{ fontSize: '15px', lineHeight: '20px', color: onSurface }}>Element</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '24px',
            border: `1px dashed ${outline}`,
            borderRadius: '16px',
          }}
        >
          {/* `data-component-id` — canonical id компонента: по нему редактор
              находит его файл и рисует инстанс, а не пустой тег. */}
          <Card data-component-id="card" />
        </div>
      </div>
    </div>
  );
}
