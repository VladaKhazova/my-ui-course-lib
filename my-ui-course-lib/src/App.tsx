import { useState } from "react";
import { Button } from "./components/Button.tsx";
import { DatePicker } from "./components/DatePicker.tsx";
import "./App.css";

function App() {
    const [bookingDate, setBookingDate] = useState("2026-10-10");
    const isWeekend = (date: string) => {
        const day = new Date(`${date}T00:00:00`).getDay();

        return day === 0 || day === 6;
    };

    return (
        <div className="buttons-page">
            <div className="buttons-page__header">
                <h1 className="buttons-page__title">
                    Кнопки. размеры, состояния, вариации.
                </h1>
                <h2 className="buttons-page__subtitle">
                    Проверка производится интерактивно (hover - навести, active - нажать).
                </h2>
            </div>
            <div className="buttons-page__grid">
                <div className="buttons-page__header-hint">default</div>
                <div className="buttons-page__header-hint">hover</div>
                <div className="buttons-page__header-hint">active</div>
                <div className="buttons-page__header-hint">disabled</div>

                <Button variant="fill" size="s" ButtonState="default">Кнопка</Button>
                <Button variant="fill" size="s" ButtonState="hover">Кнопка</Button>
                <Button variant="fill" size="s" ButtonState="active">Кнопка</Button>
                <Button variant="fill" size="s" disabled>Кнопка</Button>
                <Button variant="fill" size="m" ButtonState="default">Кнопка</Button>
                <Button variant="fill" size="m" ButtonState="hover">Кнопка</Button>
                <Button variant="fill" size="m" ButtonState="active">Кнопка</Button>
                <Button variant="fill" size="m" disabled>Кнопка</Button>
                <Button variant="fill" size="l" ButtonState="default">Кнопка</Button>
                <Button variant="fill" size="l" ButtonState="hover">Кнопка</Button>
                <Button variant="fill" size="l" ButtonState="active">Кнопка</Button>
                <Button variant="fill" size="l" disabled>Кнопка</Button>

                <Button variant="outline" size="s" ButtonState="default">Кнопка</Button>
                <Button variant="outline" size="s" ButtonState="hover">Кнопка</Button>
                <Button variant="outline" size="s" ButtonState="active">Кнопка</Button>
                <Button variant="outline" size="s" disabled>Кнопка</Button>
                <Button variant="outline" size="m" ButtonState="default">Кнопка</Button>
                <Button variant="outline" size="m" ButtonState="hover">Кнопка</Button>
                <Button variant="outline" size="m" ButtonState="active">Кнопка</Button>
                <Button variant="outline" size="m" disabled>Кнопка</Button>
                <Button variant="outline" size="l" ButtonState="default">Кнопка</Button>
                <Button variant="outline" size="l" ButtonState="hover">Кнопка</Button>
                <Button variant="outline" size="l" ButtonState="active">Кнопка</Button>
                <Button variant="outline" size="l" disabled>Кнопка</Button>

                <Button variant="text" size="s" ButtonState="default">Кнопка</Button>
                <Button variant="text" size="s" ButtonState="hover">Кнопка</Button>
                <Button variant="text" size="s" ButtonState="active">Кнопка</Button>
                <Button variant="text" size="s" disabled>Кнопка</Button>
                <Button variant="text" size="m" ButtonState="default">Кнопка</Button>
                <Button variant="text" size="m" ButtonState="hover">Кнопка</Button>
                <Button variant="text" size="m" ButtonState="active">Кнопка</Button>
                <Button variant="text" size="m" disabled>Кнопка</Button>
                <Button variant="text" size="l" ButtonState="default">Кнопка</Button>
                <Button variant="text" size="l" ButtonState="hover">Кнопка</Button>
                <Button variant="text" size="l" ButtonState="active">Кнопка</Button>
                <Button variant="text" size="l" disabled>Кнопка</Button>
            </div>

            <section className="buttons-page__date-pickers" aria-labelledby="date-picker-title">
                <div className="buttons-page__section-header">
                    <h2 className="buttons-page__section-title" id="date-picker-title">
                        DatePicker
                    </h2>
                </div>

                <div className="buttons-page__date-picker-grid">
                    <DatePicker
                        label="Дата бронирования"
                        value={bookingDate}
                        onValueChange={setBookingDate}
                        helperText={bookingDate ? `Выбрано: ${bookingDate}` : "Выберите дату"}
                        minDate="2026-10-04"
                        maxDate="2026-12-31"
                        clearable
                    />

                    <DatePicker
                        label="Обязательная дата"
                        helperText="Ошибка появится после ухода с поля"
                        required
                        validationMode="afterBlur"
                        clearable
                    />

                    <DatePicker
                        label="Дата вне диапазона"
                        defaultValue="2026-09-20"
                        minDate="2026-10-04"
                        maxDate="2026-12-31"
                        clearable
                    />

                    <DatePicker
                        label="Только будние дни"
                        defaultValue="2026-10-04"
                        isDateUnavailable={isWeekend}
                        unavailableDateText="Выходные недоступны для записи"
                        clearable
                    />

                    <DatePicker
                        label="Дата с предупреждением"
                        defaultValue="2026-12-29"
                        warningText="Почти конец периода"
                        appearance="filled"
                    />

                    <DatePicker
                        label="Дата подтверждения"
                        defaultValue="2026-10-21"
                        successText="Дата подтверждена"
                        clearable
                    />

                    <DatePicker
                        label="Дата только для чтения"
                        defaultValue="2026-10-04"
                        helperText="Значение нельзя изменить"
                        readOnly
                    />

                    <DatePicker
                        label="Недоступное поле"
                        defaultValue="2026-10-04"
                        helperText="Поле временно выключено"
                        disabled
                    />

                    <DatePicker
                        label="Компактный размер"
                        defaultValue="2026-11-05"
                        helperText="size=s"
                        size="s"
                        clearable
                    />

                    <DatePicker
                        label="Большой размер"
                        defaultValue="2026-11-20"
                        helperText="size=l"
                        size="l"
                        fullWidth
                        clearable
                    />
                </div>
            </section>
        </div>
    );
}

export default App;
