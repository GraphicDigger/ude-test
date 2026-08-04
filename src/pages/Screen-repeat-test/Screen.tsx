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
    <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center', width: '100%' }}>

      <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', padding: '20px', border: '1px dashed #e5e5e5' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '250px',
            padding: '20px',
            border: '1px solid #e5e5e5',
            borderRadius: '16px',
          }}
        >
          <img
            src="https://raw.githubusercontent.com/GraphicDigger/ude-test/main/public/markus-spiske-pZJ9M8Jxp_o-unsplash.jpg"
            alt=""
            style={{
              width: '100%',
              height: '120px',
              objectFit: 'cover',
              borderRadius: '8px',
              backgroundColor: '#F3F4F6',
            }}
          />
          <span style={{ fontSize: '15px', lineHeight: '20px', color: onSurface }}>Card is a Composite element</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', padding: '20px', border: '1px dashed #e5e5e5' }}>
        {/* `data-component-id` — canonical id компонента: по нему редактор
              находит его файл и рисует инстанс, а не пустой тег. */}
        <Card data-component-id="card" />
      </div>
    </div >
  );
}
