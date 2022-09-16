import React, {useState} from 'react';
import './App.css';
import {CounterTwoBlocks} from "./components/CounterTwoBlocks/Counter/CounterTwoBlocks";
import {CounterTwoInOne} from "./components/CounterTwoInOne/Counter/CounterTwoInOne";

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
                { changeCounter ? <CounterTwoBlocks /> : <CounterTwoInOne /> }
            </div>
        </div>
    );
}