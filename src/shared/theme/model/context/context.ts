import { createContext } from 'react';

/**
 * Theme shape — top-level keys соответствуют collection names из `tokens.css`
 * (через `themeContext.collectionRules` в `.ude/project.json`):
 *  - `theme.sys.<token>` — semantic mode-aware values.
 *  - `theme['ref-colors'].<token>` — primitives, single-mode.
 *
 * UDE iframe runtime подставляет concrete theme object через `ThemeTokenProvider`
 * (см. `editorEngine/engine/contextProviders/providers/ThemeTokenProvider.ts`)
 * с резолвом TokenReference values для active mode.
 */
export type ThemeShape = Record<string, Record<string, string>>;

export const ThemeContext = createContext<ThemeShape | null>(null);
