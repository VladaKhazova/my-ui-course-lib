import { useContext, type ReactNode } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import {darkThemeClass, darkTokens, defaultTokens, themeClass, themeScope, themeVars, type ThemeName, type ThemeTokens,} from './theme.css';
import { ThemeTokensContext } from './tokensContext';

export type ThemeContextProps = {
    theme?: ThemeName;
    tokens?: Partial<ThemeTokens>;
    children: ReactNode;
};

export function ThemeContext({ theme, tokens = {}, children }: ThemeContextProps) {
    const parent = useContext(ThemeTokensContext);
    const preset = theme === 'dark' ? darkTokens : theme === 'light' ? defaultTokens : parent ?? defaultTokens;
    const values = { ...preset };
    const presetClass = theme === 'dark' ? darkThemeClass : theme === 'light' || !parent ? themeClass : '';
    const overrides: Record<string, string | undefined> = {};

    for (const name of Object.keys(tokens) as (keyof ThemeTokens)[]) {
        values[name] = tokens[name] ?? values[name];
        overrides[themeVars[name]] = tokens[name];
    }

    return (
        <ThemeTokensContext.Provider value={values}>
            <div
                className={[presetClass, themeScope].filter(Boolean).join(' ')}
                style={assignInlineVars(overrides)}
            >
                {children}
            </div>
        </ThemeTokensContext.Provider>
    );
}
