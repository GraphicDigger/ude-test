import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

/**
 * Экран для проверки конструктора поведения.
 *
 * Во всём тестовом проекте не было ни одного обработчика события и ни одного
 * объявления состояния — извлекать поведение было неоткуда, а запись проверять
 * не на чем (action-builder STEP-2).
 *
 * Здесь собраны формы, которые конструктору предстоит и писать, и читать:
 *
 *  1. КНОПКА-ССЫЛКА — обёртка `<a>`: так переход пишет и контрол «Link to», и
 *     действие Link to конструктора. Одна механика, два входа.
 *  2. КНОПКА С ОБРАБОТЧИКОМ, который меняет состояние — распознаваемая форма.
 *  3. КНОПКА С ОБРАБОТЧИКОМ, вынесенным в отдельную функцию, — та же реакция,
 *     но объявленная не в разметке (open question 1 плана).
 *  4. КНОПКА С ПРОИЗВОЛЬНЫМ КОДОМ — форма, которую конструктор распознать не
 *     обязан: она должна показаться карточкой «код», а не пропасть.
 *  5. УСЛОВНЫЙ БЛОК — показ части интерфейса по состоянию (этап 4).
 *  6. ТЕРНАРНИК В СВОЙСТВЕ — условие на значении, а не на показе.
 */
export default function ScreenActions() {
  const theme = useContext(ThemeContext);
  const onSurface = theme?.sys?.onSurface ?? '#111111';
  const onSurfaceSecondary = theme?.sys?.onSurfaceSecondary ?? '#6B7280';
  const outline = theme?.sys?.outline ?? '#E5E5E5';
  const primary = theme?.sys?.primary ?? '#3B82F6';

  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState('first');

  // Обработчик, объявленный отдельной функцией: событие в разметке, а что оно
  // делает — здесь. Конструктор должен показать событие в любом случае.
  const handleReset = () => {
    setIsOpen(false);
  };

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
        color: onSurface,
      }}
    >
      <h1 style={{ fontSize: '28px', fontWeight: '700' }}>Actions</h1>

      {/* 1. Переход: элемент внутри обёртки-ссылки. */}
      <a href="/about" style={{ textDecoration: 'none' }}>
        <span
          style={{
            display: 'inline-block',
            padding: '10px 16px',
            border: `1px solid ${outline}`,
            borderRadius: '8px',
            color: primary,
          }}
        >
          Go to About
        </span>
      </a>

      {/* 2. Реакция, меняющая состояние экрана. */}
      <button
        onClick={() => setIsOpen(true)}
        style={{ padding: '10px 16px', border: `1px solid ${outline}`, borderRadius: '8px' }}
      >
        Show details
      </button>

      {/* 3. Та же реакция, но обработчик объявлен отдельной функцией. */}
      <button
        onClick={handleReset}
        style={{ padding: '10px 16px', border: `1px solid ${outline}`, borderRadius: '8px' }}
      >
        Hide details
      </button>

      {/* 4. Произвольный код: конструктор такое не разбирает и не обязан. */}
      <button
        onClick={() => {
          const stamp = Date.now();
          window.localStorage.setItem('actions-demo', String(stamp));
        }}
        style={{ padding: '10px 16px', border: `1px solid ${outline}`, borderRadius: '8px' }}
      >
        Remember visit
      </button>

      {/* 5. Показ части интерфейса по условию. */}
      {isOpen && (
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '16px',
            border: `1px solid ${outline}`,
            borderRadius: '12px',
          }}
        >
          <h2 style={{ fontSize: '18px', fontWeight: '600' }}>Details</h2>
          <p style={{ fontSize: '14px', lineHeight: '20px', color: onSurfaceSecondary }}>
            This block is shown while the screen state says it is open.
          </p>
        </section>
      )}

      {/* 6. Условие на ЗНАЧЕНИИ свойства, а не на показе. */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => setTab('first')}
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            border: `1px solid ${outline}`,
            color: tab === 'first' ? primary : onSurfaceSecondary,
          }}
        >
          First
        </button>
        <button
          onClick={() => setTab('second')}
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            border: `1px solid ${outline}`,
            color: tab === 'second' ? primary : onSurfaceSecondary,
          }}
        >
          Second
        </button>
      </div>
    </div>
  );
}
