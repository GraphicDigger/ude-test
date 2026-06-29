/* typography — DERIVED `var()`-хелпер для tsx-консьюмеров.
 *
 * Source of truth — `tokens.css` (`--typo-<preset>-<field>`): multi-field +
 * breakpoint-group (desktop = база `:root`, tablet/phone — `@media` overrides).
 * Этот файл НЕ редактируется руками — значения и per-breakpoint overrides живут в
 * CSS; консьюмеры читают через `var()` (инлайн-`style` резолвит переменную,
 * `@media` в `tokens.css` даёт рантайм-адаптивность по ширине экрана).
 * Генерируется/обновляется визуальным редактором (PresetWriter) из CSS-vars.
 */

export const typography = {
  body: {
    fontFamily: 'var(--typo-body-fontFamily)',
    fontSize: 'var(--typo-body-fontSize)',
    fontWeight: 'var(--typo-body-fontWeight)',
    lineHeight: 'var(--typo-body-lineHeight)',
  },
  heading: {
    fontFamily: 'var(--typo-heading-fontFamily)',
    fontSize: 'var(--typo-heading-fontSize)',
    fontWeight: 'var(--typo-heading-fontWeight)',
    lineHeight: 'var(--typo-heading-lineHeight)',
  },
  caption: {
    fontFamily: 'var(--typo-caption-fontFamily)',
    fontSize: 'var(--typo-caption-fontSize)',
    fontWeight: 'var(--typo-caption-fontWeight)',
    lineHeight: 'var(--typo-caption-lineHeight)',
    marginBottom: 'var(--typo-caption-marginBottom)',
  },
} as const;

export type Typography = typeof typography;
