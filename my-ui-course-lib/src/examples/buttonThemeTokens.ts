import type { ThemeTokens } from '../theme/theme.css';

const bluePalette = {
    main: '#3659C9',
    hover: '#2946A6',
    active: '#20377F',
    hoverBackground: '#EEF2FC',
    activeBackground: '#DEE6FA',
};

const berryPalette = {
    main: '#A33664',
    hover: '#882C53',
    active: '#6F2243',
    hoverBackground: '#FBEFF4',
    activeBackground: '#F5DBE6',
};

export const blueButtonTokens = {
    buttonFillBackground: bluePalette.main,
    buttonFillBorderColor: bluePalette.main,
    buttonFillHoverBackground: bluePalette.hover,
    buttonFillHoverBorderColor: bluePalette.hover,
    buttonFillActiveBackground: bluePalette.active,
    buttonFillActiveBorderColor: bluePalette.active,
    buttonOutlineColor: bluePalette.main,
    buttonOutlineBorderColor: bluePalette.main,
    buttonOutlineHoverColor: bluePalette.hover,
    buttonOutlineHoverBackground: bluePalette.hoverBackground,
    buttonOutlineHoverBorderColor: bluePalette.hover,
    buttonOutlineActiveColor: bluePalette.active,
    buttonOutlineActiveBackground: bluePalette.activeBackground,
    buttonOutlineActiveBorderColor: bluePalette.active,
    buttonTextColor: bluePalette.main,
    buttonTextHoverColor: bluePalette.hover,
    buttonTextHoverBackground: bluePalette.hoverBackground,
    buttonTextHoverBorderColor: bluePalette.hoverBackground,
    buttonTextActiveColor: bluePalette.active,
    buttonTextActiveBackground: bluePalette.activeBackground,
    buttonTextActiveBorderColor: bluePalette.activeBackground,
    buttonFocusRingColor: bluePalette.main,
    buttonBorderRadius: '8px',
} satisfies Partial<ThemeTokens>;

export const berryButtonTokens = {
    buttonFillBackground: berryPalette.main,
    buttonFillBorderColor: berryPalette.main,
    buttonFillHoverBackground: berryPalette.hover,
    buttonFillHoverBorderColor: berryPalette.hover,
    buttonFillActiveBackground: berryPalette.active,
    buttonFillActiveBorderColor: berryPalette.active,
    buttonOutlineColor: berryPalette.main,
    buttonOutlineBorderColor: berryPalette.main,
    buttonOutlineHoverColor: berryPalette.hover,
    buttonOutlineHoverBackground: berryPalette.hoverBackground,
    buttonOutlineHoverBorderColor: berryPalette.hover,
    buttonOutlineActiveColor: berryPalette.active,
    buttonOutlineActiveBackground: berryPalette.activeBackground,
    buttonOutlineActiveBorderColor: berryPalette.active,
    buttonTextColor: berryPalette.main,
    buttonTextHoverColor: berryPalette.hover,
    buttonTextHoverBackground: berryPalette.hoverBackground,
    buttonTextHoverBorderColor: berryPalette.hoverBackground,
    buttonTextActiveColor: berryPalette.active,
    buttonTextActiveBackground: berryPalette.activeBackground,
    buttonTextActiveBorderColor: berryPalette.activeBackground,
    buttonFocusRingColor: berryPalette.main,
    buttonBorderRadius: '8px',
} satisfies Partial<ThemeTokens>;
