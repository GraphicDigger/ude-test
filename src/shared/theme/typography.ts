/* typography — preset shapes для tsx-consumers.
 *
 * Plain JS-constants (single-mode, не CSS-vars): размеры/толщины шрифтов
 * не меняются между light/dark. Если в будущем понадобится density (compact/
 * comfortable) — переместить в tokens.css как multi-mode.
 */

export const typography = {
  body: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  heading: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '24px',
  },
  caption: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    marginBottom: '8px',
  },
} as const;

export type Typography = typeof typography;
