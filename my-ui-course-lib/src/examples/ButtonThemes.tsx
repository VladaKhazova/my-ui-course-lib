import { Button } from "../components/Button";
import { ThemeContext } from "../theme/ThemeContext";
import { blueButtonTokens, berryButtonTokens } from "./buttonThemeTokens";

export function ButtonThemes() {
    return (
        <section className="buttons-page__themes" aria-labelledby="button-themes-title">
            <h2 id="button-themes-title">Темы кнопок</h2>
            <div className="buttons-page__theme-examples">
                <Button>Обычная кнопка без кастомизаций</Button>
            </div>
            <ThemeContext tokens={{ buttonSmallPaddingX: "24px" }}>
                <div className="buttons-page__theme-examples buttons-page__theme-group">
                    <Button>Подтюненная кнопка</Button>
                    <Button variant="outline">Подтюненный контур</Button>
                    <Button variant="text">Подтюненный текст</Button>
                </div>
                <ThemeContext tokens={blueButtonTokens}>
                    <div className="buttons-page__theme-examples buttons-page__theme-group" role="group" aria-label="Синяя вложенная тема">
                        <Button>Вложенная кнопка</Button>
                        <Button variant="outline">Вложенный контур</Button>
                        <Button variant="text">Вложенный текст</Button>
                    </div>
                </ThemeContext>
                <ThemeContext tokens={berryButtonTokens}>
                    <div className="buttons-page__theme-examples buttons-page__theme-group" role="group" aria-label="Ягодная вложенная тема">
                        <Button>Вложенная кнопка</Button>
                        <Button variant="outline">Вложенный контур</Button>
                        <Button variant="text">Вложенный текст</Button>
                    </div>
                </ThemeContext>
            </ThemeContext>
        </section>
    );
}
