import { Button } from "./components/Button.tsx";
import "./App.css";

function App() {
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
        </div>
    );
}

export default App;
