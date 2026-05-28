/* sys — semantic tokens для tsx-consumers.
 *
 * Цвета — `var(--sys-*)` строки; CSS-vars резолвятся браузером по active mode
 * (см. tokens.css). Spacing / typography — plain JS-constants (не multi-mode).
 *
 * Source of truth для значений colors — `tokens.css`. Этот файл — typed
 * wrapper для удобного импорта в tsx (`import { sys } from '@/shared/theme'`).
 */

export const sys = {
  color: {
    surface: 'var(--sys-surface)',
    onSurface: 'var(--sys-onSurface)',
    primary: 'var(--sys-primary)',
    onPrimary: 'var(--sys-onPrimary)',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
} as const;

export type Sys = typeof sys;
