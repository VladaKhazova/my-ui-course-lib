import { createTheme, style } from '@vanilla-extract/css';

export const defaultTokens = {
    buttonBorderRadius: '10px',
    buttonFocusRingColor: '#2563EB',
    buttonSmallPaddingX: '16px',
    buttonSmallPaddingY: '0px',
    buttonMediumPaddingX: '20px',
    buttonMediumPaddingY: '0px',
    buttonLargePaddingX: '24px',
    buttonLargePaddingY: '0px',

    buttonFillColor: '#FFFFFF',
    buttonFillBackground: '#17171B',
    buttonFillBorderColor: '#17171B',
    buttonFillHoverColor: '#FFFFFF',
    buttonFillHoverBackground: '#2D2D33',
    buttonFillHoverBorderColor: '#2D2D33',
    buttonFillActiveColor: '#FFFFFF',
    buttonFillActiveBackground: '#050506',
    buttonFillActiveBorderColor: '#050506',
    buttonFillDisabledColor: '#FFFFFF',
    buttonFillDisabledBackground: '#A2A2A4',
    buttonFillDisabledBorderColor: '#A2A2A4',

    buttonOutlineColor: '#17171B',
    buttonOutlineBackground: '#FFFFFF',
    buttonOutlineBorderColor: '#17171B',
    buttonOutlineHoverColor: '#17171B',
    buttonOutlineHoverBackground: '#F4F4F5',
    buttonOutlineHoverBorderColor: '#17171B',
    buttonOutlineActiveColor: '#17171B',
    buttonOutlineActiveBackground: '#E7E7EA',
    buttonOutlineActiveBorderColor: '#17171B',
    buttonOutlineDisabledColor: '#A2A2A4',
    buttonOutlineDisabledBackground: '#FFFFFF',
    buttonOutlineDisabledBorderColor: '#A2A2A4',

    buttonTextColor: '#17171B',
    buttonTextBackground: '#FFFFFF',
    buttonTextBorderColor: '#FFFFFF',
    buttonTextHoverColor: '#17171B',
    buttonTextHoverBackground: '#F4F4F5',
    buttonTextHoverBorderColor: '#F4F4F5',
    buttonTextActiveColor: '#17171B',
    buttonTextActiveBackground: '#E7E7EA',
    buttonTextActiveBorderColor: '#E7E7EA',
    buttonTextDisabledColor: '#A2A2A4',
    buttonTextDisabledBackground: '#FFFFFF',
    buttonTextDisabledBorderColor: '#FFFFFF',
};

export type ThemeTokens = typeof defaultTokens;

export const [themeClass, themeVars] = createTheme(defaultTokens);

// Обёртка передаёт CSS-переменные потомкам, но не занимает места в раскладке.
export const themeScope = style({ display: 'contents' });
