import { useContext, type ReactNode } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { defaultTokens, themeClass, themeScope, themeVars, type ThemeTokens } from './theme.css';
import { ThemeTokensContext } from './tokensContext';

export type ThemeContextProps = {
    tokens?: Partial<ThemeTokens>;
    children: ReactNode;
};

export function ThemeContext({ tokens = {}, children }: ThemeContextProps) {
    const parent = useContext(ThemeTokensContext);
    const values = { ...(parent ?? defaultTokens) };
    const overrides: Record<string, string | undefined> = {};

    for (const name of Object.keys(tokens) as (keyof ThemeTokens)[]) {
        values[name] = tokens[name] ?? values[name];
        overrides[themeVars[name]] = tokens[name];
    }

    return (
        <ThemeTokensContext.Provider value={values}>
            <div
                className={parent ? themeScope : `${themeClass} ${themeScope}`}
                style={assignInlineVars(overrides)}
            >
                {children}
            </div>
        </ThemeTokensContext.Provider>
    );
}
