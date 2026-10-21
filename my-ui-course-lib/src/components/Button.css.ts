import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '../theme/theme.css';

export const button = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: themeVars.buttonBorderRadius,
    border: '1px solid #DDE0E5',
    lineHeight: '20px',
    cursor: 'pointer',
    fontWeight: 600,
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.0784)',
    textDecoration: 'none',
    ':focus-visible': {
        outline: `2px solid ${themeVars.buttonFocusRingColor}`,
        outlineOffset: '3px',
    },
});

export const sizes = styleVariants({
    s: {
        fontSize: '14px',
        minWidth: '140px',
        height: '36px',
        padding: `${themeVars.buttonSmallPaddingY} ${themeVars.buttonSmallPaddingX}`,
    },
    m: {
        fontSize: '15px',
        minWidth: '140px',
        height: '44px',
        padding: `${themeVars.buttonMediumPaddingY} ${themeVars.buttonMediumPaddingX}`,
    },
    l: {
        fontSize: '16px',
        minWidth: '150px',
        height: '52px',
        padding: `${themeVars.buttonLargePaddingY} ${themeVars.buttonLargePaddingX}`,
    },
});

const colors = {
    fill: {
        default: {
            color: themeVars.buttonFillColor,
            backgroundColor: themeVars.buttonFillBackground,
            borderColor: themeVars.buttonFillBorderColor,
        },
        hover: {
            color: themeVars.buttonFillHoverColor,
            backgroundColor: themeVars.buttonFillHoverBackground,
            borderColor: themeVars.buttonFillHoverBorderColor,
        },
        active: {
            color: themeVars.buttonFillActiveColor,
            backgroundColor: themeVars.buttonFillActiveBackground,
            borderColor: themeVars.buttonFillActiveBorderColor,
        },
        disabled: {
            color: themeVars.buttonFillDisabledColor,
            backgroundColor: themeVars.buttonFillDisabledBackground,
            borderColor: themeVars.buttonFillDisabledBorderColor,
        },
    },
    outline: {
        default: {
            color: themeVars.buttonOutlineColor,
            backgroundColor: themeVars.buttonOutlineBackground,
            borderColor: themeVars.buttonOutlineBorderColor,
        },
        hover: {
            color: themeVars.buttonOutlineHoverColor,
            backgroundColor: themeVars.buttonOutlineHoverBackground,
            borderColor: themeVars.buttonOutlineHoverBorderColor,
        },
        active: {
            color: themeVars.buttonOutlineActiveColor,
            backgroundColor: themeVars.buttonOutlineActiveBackground,
            borderColor: themeVars.buttonOutlineActiveBorderColor,
        },
        disabled: {
            color: themeVars.buttonOutlineDisabledColor,
            backgroundColor: themeVars.buttonOutlineDisabledBackground,
            borderColor: themeVars.buttonOutlineDisabledBorderColor,
        },
    },
    text: {
        default: {
            color: themeVars.buttonTextColor,
            backgroundColor: themeVars.buttonTextBackground,
            borderColor: themeVars.buttonTextBorderColor,
        },
        hover: {
            color: themeVars.buttonTextHoverColor,
            backgroundColor: themeVars.buttonTextHoverBackground,
            borderColor: themeVars.buttonTextHoverBorderColor,
        },
        active: {
            color: themeVars.buttonTextActiveColor,
            backgroundColor: themeVars.buttonTextActiveBackground,
            borderColor: themeVars.buttonTextActiveBorderColor,
        },
        disabled: {
            color: themeVars.buttonTextDisabledColor,
            backgroundColor: themeVars.buttonTextDisabledBackground,
            borderColor: themeVars.buttonTextDisabledBorderColor,
        },
    },
};

export const variants = styleVariants(colors, (states) => ({
    ...states.default,
    selectors: {
        '&:where([data-state="default"]):hover:not(:disabled):not([data-disabled]), &[data-state="hover"]:not(:disabled):not([data-disabled])': states.hover,
        '&:where([data-state="default"]):active:not(:disabled):not([data-disabled]), &[data-state="active"]:not(:disabled):not([data-disabled])': {
            ...states.active,
            boxShadow: 'none',
        },
        '&:disabled, &[data-disabled]': {
            ...states.disabled,
            cursor: 'not-allowed',
        },
    },
}));
