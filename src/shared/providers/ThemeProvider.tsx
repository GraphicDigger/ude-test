import React from 'react';

/**
 * Pass-through wrapper. CSS-vars (`tokens.css`) применяются через `:root` /
 * `[data-theme="..."]` атрибуты — runtime React context не нужен. Файл
 * сохранён как точка управления theme-switching (toggle `data-theme` на
 * `<html>` для смены active mode).
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
