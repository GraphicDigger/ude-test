import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';
import { useToggle } from '../../shared/hooks/useToggle';

/**
 * Экран-фикстура для переменных экрана (scope-variable Focus 7).
 *
 * Собран под ручной чеклист: каждая переменная здесь — отдельный случай, и
 * ровно один. Проверять их на боевых экранах неудобно, а половину и не на чем:
 *
 *  1. ОБЫЧНАЯ ПЕРЕМЕННАЯ (`title`) — та, что должна МОЛЧА стать изменяемой,
 *     когда её впервые меняет действие.
 *  2. СВОБОДНАЯ ПЕРЕМЕННАЯ (`spacing`) — на неё никто не ссылается: её и
 *     проверяют на том, что удаление проходит.
 *  3. ПАРА С ПРОИЗВОДНЫМ ИМЕНЕМ (`isOpen` / `setIsOpen`) — переименование
 *     обязано вести за собой второе имя.
 *  4. ПАРА С ЧУЖИМ ИМЕНЕМ (`tab` / `choose`) — второе имя названо не по
 *     переменной, и трогать его нельзя.
 *  5. ПАРА ИЗ СВОЕГО ХУКА (`flag` / `toggleFlag`) — форма та же, имя вызова
 *     другое: читаться должна одинаково. Само изменение (`toggleFlag()`) наша
 *     форма НЕ покрывает — оно и должно показываться шагом «код».
 *  6. ПЕРЕМЕННАЯ ПОД ОДНИМ ДЕРЖАТЕЛЕМ (`counter`) — её держит только действие,
 *     в разметке её нет: сняли действие, и удаление становится доступным.
 */
export default function ScreenVariables() {
  const theme = useContext(ThemeContext);
  const onSurface = theme?.sys?.onSurface ?? '#111111';
  const outline = theme?.sys?.outline ?? '#E5E5E5';
  const primary = theme?.sys?.primary ?? '#3B82F6';

  // 1. Обычная переменная: значение показано в разметке.
  const title = 'Draft';
  // 2. Свободная переменная: ссылок на неё нет.
  const spacing = 8;
  // 3. Пара с производным именем.
  const [isOpen, setIsOpen] = useState(false);
  // 4. Пара, где второе имя названо не по переменной.
  const [tab, choose] = useState('first');
  // 5. Пара из собственного хука проекта.
  const [flag, toggleFlag] = useToggle(false);
  // 6. Переменную держит ТОЛЬКО действие: в разметке её нет. Сняли действие —
  //    держателей не осталось, и удалить её можно.
  const [counter, setCounter] = useState(0);

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
      <h1 style={{ fontSize: '28px', fontWeight: '700' }}>{title}</h1>

      {/* Кнопка с телом-блоком: в неё можно дописать шаг цепочки. */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        style={{ padding: '10px 16px', border: `1px solid ${outline}`, borderRadius: '8px' }}
      >
        Toggle details
      </button>

      {isOpen && (
        <section style={{ padding: '16px', border: `1px solid ${outline}`, borderRadius: '12px' }}>
          <p style={{ fontSize: '14px' }}>Details are visible while the screen state says so.</p>
        </section>
      )}

      {/* Вкладки: значение переменной больше чем да/нет. */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => {
            choose('first');
          }}
          style={{ padding: '8px 12px', borderRadius: '8px', border: `1px solid ${outline}`, color: tab === 'first' ? primary : onSurface }}
        >
          First
        </button>
        <button
          onClick={() => {
            choose('second');
          }}
          style={{ padding: '8px 12px', borderRadius: '8px', border: `1px solid ${outline}`, color: tab === 'second' ? primary : onSurface }}
        >
          Second
        </button>
      </div>

      {/* Пара из своего хука: показ значения и элемент без действия. */}
      <button
        onClick={() => {
          toggleFlag();
        }}
        style={{ padding: '10px 16px', border: `1px solid ${outline}`, borderRadius: '8px' }}
      >
        Flag is {flag ? 'on' : 'off'}
      </button>

      {/* Держатель у переменной один — это действие; значение нигде не показано. */}
      <button
        onClick={() => {
          setCounter(1);
        }}
        style={{ padding: '10px 16px', border: `1px solid ${outline}`, borderRadius: '8px' }}
      >
        Count up
      </button>

      {/* Элемент без событий — на нём собирают новое действие с нуля. */}
      <p style={{ fontSize: '14px' }}>Pick me to build a new action.</p>
    </div>
  );
}
