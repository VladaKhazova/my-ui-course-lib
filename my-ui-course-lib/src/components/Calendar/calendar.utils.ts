import type { CalendarProps } from './Calendar.types';
import type { Locale } from '../../locale/locale';

type DateLimits = Pick<CalendarProps, 'minDate' | 'maxDate' | 'isDateDisabled'>;

export function startOfDay(date: Date) {
    const res = new Date(date);
    res.setHours(0, 0, 0, 0);
    return res;
}

export function startOfMonth(date: Date) {
    const res = startOfDay(date);
    res.setDate(1);
    return res;
}

export function endOfMonth(date: Date) {
    const res = startOfMonth(date);
    res.setMonth(res.getMonth() + 1);
    res.setDate(0);
    return res;
}

export function addDays(date: Date, count: number) {
    const res = startOfDay(date);
    res.setDate(res.getDate() + count);
    return res;
}

export function addMonths(date: Date, count: number) {
    const res = startOfMonth(date);
    res.setMonth(res.getMonth() + count);
    res.setDate(Math.min(date.getDate(), endOfMonth(res).getDate()));
    return res;
}

export function isSameMonth(first: Date, second: Date) {
    return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth();
}

export function isSameDay(first: Date, second: Date) {
    return getDateKey(first) === getDateKey(second);
}

export function startOfWeek(date: Date, { weekStartsOn }: { weekStartsOn: Locale['firstDayOfWeek'] }) {
    return addDays(date, -((date.getDay() - weekStartsOn + 7) % 7));
}

export function endOfWeek(date: Date, options: { weekStartsOn: Locale['firstDayOfWeek'] }) {
    return addDays(startOfWeek(date, options), 6);
}

export function getKeyboardDate(date: Date, key: string, locale: Locale, shiftKey = false) {
    const weekOptions = { weekStartsOn: locale.firstDayOfWeek };

    switch (key) {
        case 'ArrowLeft': return addDays(date, locale.dir === 'rtl' ? 1 : -1);
        case 'ArrowRight': return addDays(date, locale.dir === 'rtl' ? -1 : 1);
        case 'ArrowUp': return addDays(date, -7);
        case 'ArrowDown': return addDays(date, 7);
        case 'Home': return startOfWeek(date, weekOptions);
        case 'End': return endOfWeek(date, weekOptions);
        case 'PageUp': return addMonths(date, shiftKey ? -12 : -1);
        case 'PageDown': return addMonths(date, shiftKey ? 12 : 1);
        default: return null;
    }
}

export function getDateKey(date: Date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

export function isDateUnavailable(date: Date, { minDate, maxDate, isDateDisabled }: DateLimits) {
    const day = startOfDay(date);
    return Boolean((minDate && day < startOfDay(minDate))
        || (maxDate && day > startOfDay(maxDate))
        || isDateDisabled?.(day), );
}

export function isMonthInRange(month: Date, { minDate, maxDate }: DateLimits) {
    return (!minDate || endOfMonth(month) >= startOfDay(minDate))
        && (!maxDate || startOfMonth(month) <= startOfDay(maxDate));
}

export function clampMonth(month: Date, { minDate, maxDate }: DateLimits) {
    const first = startOfMonth(month);
    const minimum = minDate ? startOfMonth(minDate) : null;
    const maximum = maxDate ? startOfMonth(maxDate) : null;
    return minimum && first < minimum ? minimum : maximum && first > maximum ? maximum : first;
}

export function getCalendarWeeks(month: Date, firstDayOfWeek: Locale['firstDayOfWeek']) {
    const first = startOfMonth(month);
    const days = Array.from({ length: endOfMonth(first).getDate() }, (_, index) => addDays(first, index));
    const offset = (first.getDay() - firstDayOfWeek + 7) % 7;
    const count = Math.ceil((offset + days.length) / 7) * 7;
    const cells = Array.from({ length: count }, (_, index) => days[index - offset] ?? null);
    return Array.from({ length: count / 7 }, (_, index) => cells.slice(index * 7, index * 7 + 7));
}

function dateFormatter(locale: string, options: Intl.DateTimeFormatOptions) {
    return new Intl.DateTimeFormat(locale, {
        calendar: 'gregory',
        numberingSystem: locale.startsWith('ar') ? 'arab' : undefined,
        ...options,
    });
}

function joinDateParts(parts: Intl.DateTimeFormatPart[]) {
    const lastDatePart = parts.findLastIndex((part) => part.type !== 'literal');

    return parts.slice(0, lastDatePart + 1).map((part) => part.value).join('');
}

export function formatMonthLabel(month: Date, locale: string) {
    const parts = dateFormatter(locale, { month: 'long', year: 'numeric' }).formatToParts(month);

    return joinDateParts(parts.map((part) => part.type === 'month'
        ? { ...part, value: part.value.charAt(0).toLocaleUpperCase(locale) + part.value.slice(1) }
        : part));
}

export function formatSelectedDate(value: Date | null, locale: string) {
    return value ? joinDateParts(dateFormatter(locale, {
        day: 'numeric',
        month: locale.startsWith('en') ? 'short' : 'long',
        year: 'numeric',
    }).formatToParts(value)) : '';
}

export function formatAccessibleDate(date: Date, locale: string) {
    return dateFormatter(locale, { dateStyle: 'full' }).format(date);
}

export function formatDayNumber(date: Date, locale: string) {
    return new Intl.NumberFormat(locale, {
        useGrouping: false,
        numberingSystem: locale.startsWith('ar') ? 'arab' : undefined,
    }).format(date.getDate());
}

export function getWeekdays(locale: Locale) {
    const sunday = new Date(2026, 10, 1);
    const short = dateFormatter(locale.locale, { weekday: locale.dir === 'rtl' ? 'narrow' : 'short' });
    const full = dateFormatter(locale.locale, { weekday: 'long' });

    return Array.from({ length: 7 }, (_, index) => {
        const date = addDays(sunday, (locale.firstDayOfWeek + index) % 7);

        return { day: date.getDay(), short: short.format(date), full: full.format(date) };
    });
}
