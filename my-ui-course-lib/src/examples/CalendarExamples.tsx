import { useState } from 'react';
import { Calendar } from '../components/Calendar/Calendar';
import { endOfMonth, startOfDay, startOfMonth } from '../components/Calendar/calendar.utils';
import { LocaleContext, ruRU, enUS, arEG } from '../locale/locale';
import { ThemeContext } from '../theme/ThemeContext';
import type { ThemeName } from '../theme/theme.css';
import { Button } from '../components/Button';
import * as calendarStyles from '../components/Calendar/Calendar.css';
import * as styles from './CalendarExamples.css';

const locales = [ruRU, enUS, arEG];
const states = ['default', ':hover', ':active', ':focus-visible', 'selected', 'today', 'today + selected', 'disabled', 'outside'];

export function CalendarExamples() {
    const [date, setDate] = useState<Date | null>(null);
    const [month, setMonth] = useState(() => startOfMonth(new Date()));
    const [theme, setTheme] = useState<ThemeName>('light');
    const [limitDates, setLimitDates] = useState(false);
    const [disableWeekends, setDisableWeekends] = useState(false);
    const currentMonth = startOfMonth(new Date());

    return (
        <ThemeContext theme={theme}>
            <section className={styles.root} aria-labelledby="calendars-title">
                <div className={styles.toolbar}>
                    <h2 className={styles.title} id="calendars-title">Calendar</h2>
                    <label className={styles.option}>
                        Тема
                        <select className={styles.select} value={theme} onChange={(event) => setTheme(event.target.value as ThemeName)}>
                            <option value="light">Светлая</option>
                            <option value="dark">Тёмная</option>
                        </select>
                    </label>
                    <label className={styles.option}>
                        <input
                            type="checkbox" checked={limitDates}
                            onChange={(event) => {
                                setLimitDates(event.target.checked);
                                if (event.target.checked) setMonth(currentMonth);
                            }}
                        />
                        Только текущий месяц
                    </label>
                    <label className={styles.option}>
                        <input type="checkbox" checked={disableWeekends} onChange={(event) => setDisableWeekends(event.target.checked)} />
                        Выключить выходные
                    </label>
                    <Button variant="text" disabled={!date} onClick={() => setDate(null)}>Очистить</Button>
                </div>
                <div className={styles.calendars}>
                    {locales.map((locale) => (
                        <article key={locale.locale}>
                            <h3 className={styles.localeTitle}>{locale.locale}</h3>
                            <div className={styles.localeFrame}>
                                <LocaleContext.Provider value={locale}>
                                    <Calendar
                                        value={date} onValueChange={setDate}
                                        month={month} onMonthChange={setMonth}
                                        minDate={limitDates ? currentMonth : undefined}
                                        maxDate={limitDates ? endOfMonth(currentMonth) : undefined}
                                        isDateDisabled={disableWeekends ? (day) => locale.weekend.includes(day.getDay()) : undefined}
                                    />
                                </LocaleContext.Provider>
                            </div>
                        </article>
                    ))}
                </div>
                <h3 className={styles.statesTitle}>Состояния дня</h3>
                <div className={styles.scroll}>
                    <table className={styles.states}>
                        <thead>
                            <tr>
                                <th className={styles.stateCell} scope="col">Тип</th>
                                {states.map((state) => <th className={styles.stateCell} scope="col" key={state}>{state}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {[false, true].map((weekend) => (
                                <tr key={String(weekend)}>
                                    <th className={styles.stateCell} scope="row">{weekend ? 'Выходной' : 'День'}</th>
                                    {states.map((state) => (
                                        <td className={styles.stateCell} key={state}>
                                            <span
                                                className={calendarStyles.day}
                                                data-weekend={weekend || undefined}
                                                data-preview={state === ':hover' ? 'hover' : state === ':active' ? 'active' : state === ':focus-visible' ? 'focus' : undefined}
                                                data-selected={state.includes('selected') || undefined}
                                                aria-current={state.includes('today') ? 'date' : undefined}
                                                aria-disabled={state === 'disabled' || undefined}
                                                data-outside={state === 'outside' ? '' : undefined}
                                            >
                                                {state === 'outside' ? '1' : weekend ? '21' : '17'}
                                            </span>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h3 className={styles.statesTitle}>Button</h3>
                <div className={styles.buttonExamples}>
                    {[ruRU, arEG].map((locale) => (
                        <article className={styles.buttonExample} key={locale.locale}>
                            <h4 className={styles.buttonLocale}>{locale.locale} · dir="{locale.dir}"</h4>
                            <Button
                                variant="outline" size="s" className={calendarStyles.today}
                                dir={locale.dir} lang={locale.locale}
                                disabled={disableWeekends && locale.weekend.includes(new Date().getDay())}
                                onClick={() => {
                                    const today = startOfDay(new Date());
                                    setDate(today);
                                    setMonth(startOfMonth(today));
                                }}
                            >
                                <svg className={calendarStyles.icon} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <rect x="2" y="3" width="12" height="11" rx="2.5" />
                                    <line x1="2" y1="7" x2="14" y2="7" />
                                    <line x1="5.5" y1="2" x2="5.5" y2="4" />
                                    <line x1="10.5" y1="2" x2="10.5" y2="4" />
                                </svg>
                                {locale.messages.calendar.today}
                            </Button>
                        </article>
                    ))}
                </div>
            </section>
        </ThemeContext>
    );
}
