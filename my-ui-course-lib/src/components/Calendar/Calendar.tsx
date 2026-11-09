import { useId, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Button } from '../Button';
import { useLocale } from '../../locale/locale';
import { ThemeContext } from '../../theme/ThemeContext';
import type { CalendarProps } from './Calendar.types';
import {formatAccessibleDate, formatDayNumber, formatMonthLabel, formatSelectedDate, getCalendarWeeks, getDateKey, getWeekdays, isDateUnavailable, isMonthInRange, addMonths, clampMonth, getKeyboardDate, isSameDay, isSameMonth, startOfDay, startOfMonth,} from './calendar.utils';
import * as styles from './Calendar.css';

export function Calendar({
    value, onValueChange, month, onMonthChange, minDate, maxDate, isDateDisabled, autoFocus = false,
}: CalendarProps) {
    const locale = useLocale();
    const headingId = useId();
    const today = startOfDay(new Date());
    const valueKey = value ? getDateKey(value) : '';
    const limits = { minDate, maxDate, isDateDisabled };
    const [view, setView] = useState(() => ({ month: clampMonth(value ?? today, limits), valueKey }));
    const [focus, setFocus] = useState(() => ({ date: startOfDay(value ?? month ?? today), valueKey }));
    const dayRefs = useRef(new Map<string, HTMLButtonElement>());
    const pendingFocus = useRef<Date | null>(null);
    const autoFocusApplied = useRef(false);
    const shownMonth = clampMonth(month ?? (view.valueKey === valueKey ? view.month : value ?? view.month), limits);
    const focusedDate = focus.valueKey === valueKey && isSameMonth(focus.date, shownMonth)
        ? focus.date
        : value && isSameMonth(value, shownMonth) ? value : isSameMonth(today, shownMonth) ? today : shownMonth;
    const focusedKey = getDateKey(focusedDate);
    const monthKey = getDateKey(shownMonth);
    const previousMonth = addMonths(shownMonth, -1);
    const nextMonth = addMonths(shownMonth, 1);

    if (month === undefined && (view.valueKey !== valueKey || !isSameMonth(view.month, shownMonth))) {
        setView({ month: shownMonth, valueKey });
    }

    useLayoutEffect(() => {
        const requestedDate = pendingFocus.current;

        if (requestedDate && getDateKey(startOfMonth(requestedDate)) === monthKey) {
            dayRefs.current.get(getDateKey(requestedDate))?.focus();
            pendingFocus.current = null;
            autoFocusApplied.current = true;
        } else if (autoFocus && !autoFocusApplied.current) {
            dayRefs.current.get(focusedKey)?.focus();
            autoFocusApplied.current = true;
        }
    }, [autoFocus, focusedKey, monthKey]);

    function showMonth(next: Date) {
        const first = startOfMonth(next);

        if (isSameMonth(first, shownMonth) || !isMonthInRange(first, limits)) return;
        if (month === undefined) setView({ month: first, valueKey });
        onMonthChange?.(first);
    }

    function moveFocus(date: Date) {
        if (!isMonthInRange(date, limits)) return;
        pendingFocus.current = startOfDay(date);
        setFocus({ date: startOfDay(date), valueKey });
        showMonth(date);
    }

    function selectDate(date: Date) {
        if (!isDateUnavailable(date, limits)) onValueChange(startOfDay(date));
    }

    function handleToday() {
        if (isDateUnavailable(today, limits)) return;
        moveFocus(today);
        selectDate(today);
    }

    function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, date: Date) {
        const destination = getKeyboardDate(date, event.key, locale, event.shiftKey);

        if (destination) {
            event.preventDefault();
            moveFocus(destination);
        }
    }

    return (
        <ThemeContext>
            <div className={styles.root} dir={locale.dir} lang={locale.locale}>
                <div className={styles.header}>
                    <Button variant="outline" className={styles.navigation} aria-label={locale.messages.calendar.prevMonth}
                            title={locale.messages.calendar.prevMonth} disabled={!isMonthInRange(previousMonth, limits)}
                            onClick={() => showMonth(previousMonth)}>
                        <svg className={styles.chevron} width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                            <path d="M8.75 0.750046L0.75 6.75005L8.75 12.75" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                        </svg>
                    </Button>
                    <h3 className={styles.heading} id={headingId} aria-live="polite" aria-atomic="true">
                        {formatMonthLabel(shownMonth, locale.locale)}
                    </h3>
                    <Button variant="outline" className={styles.navigation} aria-label={locale.messages.calendar.nextMonth}
                            title={locale.messages.calendar.nextMonth} disabled={!isMonthInRange(nextMonth, limits)}
                            onClick={() => showMonth(nextMonth)}>
                        <svg className={styles.chevron} width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                            <path d="M0.750031 0.750046L8.75003 6.75005L0.750031 12.75" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                        </svg>
                    </Button>
                </div>
                <table className={styles.grid} role="grid" aria-labelledby={headingId}>
                    <thead className={styles.weekdays} role="rowgroup">
                        <tr className={styles.week} role="row">
                            {getWeekdays(locale).map((weekday) => (
                                <th className={styles.weekday} scope="col" role="columnheader" key={weekday.day}
                                    data-weekend={locale.weekend.includes(weekday.day) || undefined}>
                                    <abbr className={styles.weekdayText} title={weekday.full}>{weekday.short}</abbr>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className={styles.weeks} role="rowgroup">
                        {getCalendarWeeks(shownMonth, locale.firstDayOfWeek).map((week, index) => (
                            <tr className={styles.week} role="row" key={index}>
                                {week.map((date, column) => {
                                    if (!date) return <td className={styles.cell} role="gridcell" key={column} />;
                                    const selected = Boolean(value && isSameDay(value, date));
                                    const dateKey = getDateKey(date);

                                    return (
                                        <td className={styles.cell} role="gridcell" aria-selected={selected} key={dateKey}>
                                            <button
                                                type="button" className={styles.day}
                                                aria-label={formatAccessibleDate(date, locale.locale)}
                                                aria-current={isSameDay(date, today) ? 'date' : undefined}
                                                aria-disabled={isDateUnavailable(date, limits)}
                                                data-selected={selected || undefined}
                                                data-weekend={locale.weekend.includes(date.getDay()) || undefined}
                                                tabIndex={dateKey === focusedKey ? 0 : -1}
                                                ref={(node) => {
                                                    if (node) dayRefs.current.set(dateKey, node);
                                                    else dayRefs.current.delete(dateKey);
                                                }}
                                                onFocus={() => setFocus({ date, valueKey })}
                                                onClick={() => selectDate(date)}
                                                onKeyDown={(event) => handleKeyDown(event, date)}>
                                                {formatDayNumber(date, locale.locale)}
                                            </button>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={styles.divider} aria-hidden="true" />
                <div className={styles.footer}>
                    <span className={styles.selectedDate}>{formatSelectedDate(value, locale.locale)}</span>
                    <Button variant="outline" className={styles.today} disabled={isDateUnavailable(today, limits)} onClick={handleToday}>
                        <svg className={styles.icon} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                            <rect x="2" y="3" width="12" height="11" rx="2.5" />
                            <line x1="2" y1="7" x2="14" y2="7" />
                            <line x1="5.5" y1="2" x2="5.5" y2="4" />
                            <line x1="10.5" y1="2" x2="10.5" y2="4" />
                        </svg>
                        {locale.messages.calendar.today}
                    </Button>
                </div>
            </div>
        </ThemeContext>
    );
}
