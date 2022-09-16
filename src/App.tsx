import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/CounterTwoBlocks/Counter/Counter";
import {CounterTwoInOne} from "./components/CounterTwoInOne/CounterTwoInOne";

export const App = () => {

    const [changeCounter, setChangeCounter] = useState<boolean>(true);

    const onClickHandlerChangeCounter = () => {
        setChangeCounter(!changeCounter);
    }

    return (
        <div className="App">
            <div className="toggleCounterButton">
                <button onClick={onClickHandlerChangeCounter}>Сменить тип счётчика</button>
            </div>
            <div className="wrapper">
                { changeCounter ? <Counter /> : <CounterTwoInOne /> }
            </div>
        </div>
    );
}