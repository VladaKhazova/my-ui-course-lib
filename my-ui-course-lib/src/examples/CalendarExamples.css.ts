import { globalStyle, style } from '@vanilla-extract/css';
import { themeVars as vars } from '../theme/theme.css';

export const root = style({
    paddingBlock: '24px 32px',
    paddingInline: vars.calendarPadding,
    marginBlockEnd: '32px',
    backgroundColor: vars.calendarBackground,
    color: vars.calendarColor,
    fontFamily: vars.calendarFontFamily,
    lineHeight: 1.5,
});

export const toolbar = style({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px 20px',
    marginBlockEnd: '24px',
});

export const title = style({ margin: 0, flexBasis: '100%', fontSize: '24px', lineHeight: 1.3 });

export const option = style({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
});

export const select = style({
    paddingBlock: '6px',
    paddingInline: '8px',
    border: `${vars.calendarBorderWidth} solid ${vars.calendarBorderColor}`,
    borderRadius: vars.calendarControlRadius,
    font: 'inherit',
    color: vars.calendarColor,
    backgroundColor: vars.calendarBackground,
    ':focus-visible': {
        outline: `${vars.calendarFocusWidth} solid ${vars.calendarFocusColor}`,
        outlineOffset: vars.calendarFocusOffset,
    },
});

export const calendars = style({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, calc(${vars.calendarWidth} + 2 * ${vars.calendarFramePadding})), 1fr))`,
    gap: vars.calendarFramePadding,
    maxInlineSize: `calc(3 * (${vars.calendarWidth} + 2 * ${vars.calendarFramePadding}) + 2 * ${vars.calendarFramePadding})`,
});

export const localeFrame = style({
    boxSizing: 'border-box',
    inlineSize: `calc(${vars.calendarWidth} + 2 * ${vars.calendarFramePadding})`,
    maxInlineSize: '100%',
    paddingBlock: vars.calendarFramePadding,
    paddingInline: vars.calendarFramePadding,
});

export const localeTitle = style({
    margin: 0,
    marginBlockEnd: '12px',
    color: vars.calendarMutedColor,
    fontSize: '13px',
    fontWeight: 500,
});

export const statesTitle = style({ marginBlock: '32px 16px', fontSize: '16px', fontWeight: 600 });
export const scroll = style({ maxInlineSize: '100%', overflowX: 'auto' });

export const states = style({
    inlineSize: vars.calendarTableWidth,
    tableLayout: 'fixed',
    borderCollapse: 'separate',
    borderSpacing: 0,
    border: `${vars.calendarBorderWidth} solid ${vars.calendarBorderColor}`,
    fontSize: vars.calendarFooterFontSize,
    lineHeight: vars.calendarFooterLineHeight,
});

export const stateCell = style({
    boxSizing: 'border-box',
    blockSize: vars.calendarTableRowHeight,
    inlineSize: vars.calendarTableColumnWidth,
    padding: 0,
    border: `${vars.calendarBorderWidth} solid ${vars.calendarBorderColor}`,
    textAlign: 'center',
    verticalAlign: 'middle',
});

globalStyle(`${states} thead th`, {
    blockSize: vars.calendarTableHeadingHeight,
    fontWeight: 500,
    color: vars.calendarTableHeadingColor,
});
globalStyle(`${states} tbody th`, { fontSize: vars.calendarFontSize, fontWeight: 600, color: vars.calendarColor });
globalStyle(`${states} tr > :first-child`, { inlineSize: vars.calendarTableLabelWidth });
globalStyle(`${option} input`, { margin: 0, accentColor: vars.calendarFocusColor });

export const buttonExamples = style({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${vars.calendarWidth}), 1fr))`,
    gap: vars.calendarFramePadding,
    maxInlineSize: `calc(2 * ${vars.calendarWidth} + ${vars.calendarFramePadding})`,
});

export const buttonExample = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: vars.calendarFramePadding,
    paddingBlock: vars.calendarFramePadding,
    paddingInline: vars.calendarFramePadding,
});

export const buttonLocale = style({ margin: 0, fontSize: vars.calendarFontSize, fontWeight: 600 });
