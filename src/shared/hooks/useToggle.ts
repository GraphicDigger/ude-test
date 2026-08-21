import { useCallback, useState } from 'react';

/**
 * Свой хук проекта, объявляющий меняющееся значение.
 *
 * Нужен фикстуре: редактор обязан читать переменную структурно — по форме
 * объявления пары, — а не по имени `useState`. Проект вправе назвать своё
 * иначе, и переменная от этого не перестаёт быть переменной экрана.
 */
export function useToggle(initial: boolean): [boolean, (next?: boolean) => void] {
  const [value, setValue] = useState(initial);
  const toggle = useCallback((next?: boolean) => {
    setValue((current) => (typeof next === 'boolean' ? next : !current));
  }, []);
  return [value, toggle];
}
