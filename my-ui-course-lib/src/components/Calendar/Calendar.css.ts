import { style } from '@vanilla-extract/css';
import { themeVars as vars } from '../../theme/theme.css';

export const root = style({
    display: 'flex',
    flexDirection: 'column',
    gap: vars.calendarSectionGap,
    boxSizing: 'border-box',
    inlineSize: vars.calendarWidth,
    maxInlineSize: '100%',
    paddingBlock: vars.calendarPadding,
    paddingInline: vars.calendarPadding,
    color: vars.calendarColor,
    backgroundColor: vars.calendarBackground,
    border: `${vars.calendarBorderWidth} solid ${vars.calendarBorderColor}`,
    borderRadius: vars.calendarBorderRadius,
    fontFamily: vars.calendarFontFamily,
    fontSize: vars.calendarFontSize,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: vars.calendarLineHeight,
    selectors: {
        '&:lang(ar)': { fontFamily: vars.calendarArabicFontFamily, lineHeight: vars.calendarArabicLineHeight },
    },
});

export const header = style({
    display: 'grid',
    gridTemplateColumns: `${vars.calendarNavigationSize} minmax(0, 1fr) ${vars.calendarNavigationSize}`,
    alignItems: 'center',
    gap: vars.calendarControlGap,
    blockSize: vars.calendarNavigationSize,
});

export const heading = style({
    margin: 0,
    textAlign: 'center',
    fontSize: vars.calendarHeadingFontSize,
    lineHeight: vars.calendarHeadingLineHeight,
    fontWeight: 600,
    overflowWrap: 'anywhere',
    selectors: {
        '&:lang(ar)': { lineHeight: vars.calendarArabicHeadingLineHeight },
    },
});

const control = {
    minWidth: 0,
    boxSizing: 'border-box',
    height: vars.calendarNavigationSize,
    backgroundColor: vars.calendarBackground,
    fontFamily: 'inherit',
    fontSize: vars.calendarFontSize,
    lineHeight: vars.calendarButtonLineHeight,
} as const;

export const navigation = style({
    selectors: {
        '&[data-state]': {
            ...control,
            color: vars.calendarColor,
            borderColor: vars.calendarColor,
            width: vars.calendarNavigationSize,
            borderRadius: vars.calendarControlRadius,
            boxShadow: 'none',
            padding: 0,
        },
        '&[data-state]:not(:disabled):not([data-disabled]):hover': {
            backgroundColor: vars.calendarHoverBackground,
            color: vars.calendarColor,
            borderColor: vars.calendarColor,
        },
        '&[data-state]:not(:disabled):not([data-disabled]):active': {
            backgroundColor: vars.calendarActiveBackground,
            color: vars.calendarColor,
            borderColor: vars.calendarColor,
        },
        '&[data-state]:disabled': {
            color: vars.calendarDisabledColor,
            borderColor: vars.calendarBorderColor,
        },
        '&[data-state]:focus-visible': { outlineColor: vars.calendarFocusColor },
    },
});

export const today = style({
    selectors: {
        '&[data-state]': {
            ...control,
            gap: vars.calendarControlGap,
            paddingBlock: 0,
            paddingInlineStart: vars.calendarTodayPaddingStart,
            paddingInlineEnd: vars.calendarTodayPaddingEnd,
            whiteSpace: 'nowrap',
        },
        '&[data-state]:lang(ar)': { fontFamily: vars.calendarArabicFontFamily, fontWeight: 500 },
        '&[data-state]:not(:disabled):not([data-disabled]):hover': {
            backgroundColor: vars.calendarHoverBackground,
        },
        '&[data-state]:not(:disabled):not([data-disabled]):active': { backgroundColor: vars.calendarActiveBackground },
        '&[data-state]:disabled': {
            color: vars.calendarDisabledColor,
            borderColor: vars.calendarBorderColor,
        },
        '&[data-state]:focus-visible': { outlineColor: vars.calendarFocusColor },
    },
});

export const icon = style({
    inlineSize: vars.calendarIconSize,
    blockSize: vars.calendarIconSize,
    flexShrink: 0,
});

export const chevron = style({
    inlineSize: vars.calendarChevronWidth,
    blockSize: vars.calendarChevronHeight,
    flexShrink: 0,
    selectors: { '&[data-direction="next"]': { transform: 'rotate(180deg)' } },
});

export const grid = style({
    display: 'flex',
    flexDirection: 'column',
    gap: vars.calendarSectionGap,
    borderSpacing: 0,
});

export const weekdays = style({ display: 'block' });
export const weeks = style({ display: 'flex', flexDirection: 'column', gap: vars.calendarDayGap });
export const week = style({ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' });

export const weekday = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    blockSize: vars.calendarWeekdayHeight,
    color: vars.calendarMutedColor,
    fontSize: vars.calendarWeekdayFontSize,
    lineHeight: vars.calendarWeekdayLineHeight,
    fontWeight: 500,
    selectors: {
        '&[data-weekend="true"]': { color: vars.calendarWeekendColor },
        '&:lang(ar)': { lineHeight: vars.calendarArabicWeekdayLineHeight },
    },
});

export const weekdayText = style({ textDecoration: 'none' });

export const cell = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    blockSize: vars.calendarDaySize,
});

export const day = style({
    appearance: 'none',
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    inlineSize: vars.calendarDaySize,
    blockSize: vars.calendarDaySize,
    maxInlineSize: '100%',
    padding: 0,
    border: 0,
    borderRadius: vars.calendarDayBorderRadius,
    backgroundColor: 'transparent',
    color: vars.calendarColor,
    font: 'inherit',
    fontSize: vars.calendarFontSize,
    lineHeight: vars.calendarLineHeight,
    gap: vars.calendarTodayDotOffset,
    cursor: 'pointer',
    selectors: {
        '&:lang(ar)': { fontFamily: vars.calendarArabicFontFamily, lineHeight: vars.calendarArabicLineHeight },
        '&[data-weekend="true"]': { color: vars.calendarWeekendColor },
        '&:is(:hover, [data-preview="hover"]):not([aria-disabled="true"]):not([data-outside])': {
            backgroundColor: vars.calendarHoverBackground,
        },
        '&:is(:active, [data-preview="active"]):not([aria-disabled="true"]):not([data-outside])': {
            backgroundColor: vars.calendarActiveBackground,
        },
        '&:is(:focus-visible, [data-preview="focus"])': {
            outline: `${vars.calendarFocusWidth} solid ${vars.calendarFocusColor}`,
            outlineOffset: `calc(0px - ${vars.calendarFocusWidth})`,
        },
        '&[aria-current="date"]': { color: vars.calendarTodayColor, fontWeight: 600 },
        '&[aria-current="date"]::after': {
            content: '""',
            flexShrink: 0,
            inlineSize: vars.calendarTodayDotSize,
            blockSize: vars.calendarTodayDotSize,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
        },
        '&[data-selected="true"]': {
            backgroundColor: vars.calendarSelectedBackground,
            color: vars.calendarSelectedColor,
            fontWeight: 600,
        },
        '&[data-selected="true"]:is(:focus-visible, [data-preview="focus"])': {
            outlineColor: vars.calendarSelectedColor,
        },
        '&[data-selected="true"]:hover:not([aria-disabled="true"])': {
            backgroundColor: vars.calendarSelectedHoverBackground,
        },
        '&[data-selected="true"]:active:not([aria-disabled="true"])': {
            backgroundColor: vars.calendarSelectedActiveBackground,
        },
        '&[aria-disabled="true"]': {
            color: vars.calendarDisabledColor,
            cursor: 'not-allowed',
        },
        '&[data-outside]': { color: vars.calendarOutsideColor, cursor: 'default' },
    },
});

export const divider = style({
    blockSize: vars.calendarBorderWidth,
    flexShrink: 0,
    backgroundColor: vars.calendarBorderColor,
});

export const footer = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: vars.calendarControlGap,
    minBlockSize: vars.calendarNavigationSize,
});

export const selectedDate = style({
    minInlineSize: 0,
    color: vars.calendarMutedColor,
    fontSize: vars.calendarFooterFontSize,
    lineHeight: vars.calendarFooterLineHeight,
    selectors: {
        '&:lang(ar)': { lineHeight: vars.calendarArabicFooterLineHeight },
    },
});
