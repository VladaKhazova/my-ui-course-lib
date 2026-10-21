import { createContext } from 'react';
import type { ThemeTokens } from './theme.css';

export const ThemeTokensContext = createContext<ThemeTokens | null>(null);
