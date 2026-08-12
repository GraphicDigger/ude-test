import React, { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

/**
 * Страница записи — цель перехода из списка.
 *
 * Экран нарочно СТАТИЧЕН: коллекцию ему выбирают в редакторе (Props → Data),
 * после чего он становится страницей на запись, а поля привязываются к
 * элементам этой разметки. Так проверяется продуктовый путь целиком, а не
 * заранее написанный результат.
 *
 * Разметка — карточка подробностей: крупная картинка, имя, роль, почта. Это
 * те же поля, что показывает карточка списка на `Screen-repeat-test`, только
 * подробнее — чтобы переход «список → запись» было видно по содержимому.
 */
export default function ScreenRecord() {
  const theme = useContext(ThemeContext);
  const onSurface = theme?.sys?.onSurface ?? '#111111';
  const onSurfaceSecondary = theme?.sys?.onSurfaceSecondary ?? '#6B7280';
  const outline = theme?.sys?.outline ?? '#E5E5E5';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%',
        maxWidth: '640px',
        padding: '40px',
        margin: '0 auto',
      }}
    >
      <img
        src="https://raw.githubusercontent.com/GraphicDigger/ude-test/main/public/markus-spiske-pZJ9M8Jxp_o-unsplash.jpg"
        alt=""
        style={{
          width: '100%',
          height: '280px',
          objectFit: 'cover',
          borderRadius: '16px',
          backgroundColor: '#F3F4F6',
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', color: onSurface }}>Record name</h1>
        <span style={{ fontSize: '15px', lineHeight: '20px', color: onSurfaceSecondary }}>Role</span>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          padding: '20px',
          border: `1px solid ${outline}`,
          borderRadius: '16px',
        }}
      >
        <span style={{ fontSize: '15px', lineHeight: '20px', color: onSurface }}>email@example.com</span>
        <span style={{ fontSize: '13px', lineHeight: '18px', color: onSurfaceSecondary }}>Joined</span>
      </div>
    </div>
  );
}
