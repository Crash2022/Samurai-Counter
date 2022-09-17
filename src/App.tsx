import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterTwoBlocks} from "./components/CounterTwoBlocks/Counter/CounterTwoBlocks";
import {CounterTwoInOne} from "./components/CounterTwoInOne/Counter/CounterTwoInOne";

export const App = () => {

    const [changeCounter, setChangeCounter] = useState<boolean>(true);

    const onClickHandlerChangeCounter = () => {
        setChangeCounter(!changeCounter);
    }

    useEffect(() => {
        let localValueChangeCounter = localStorage.getItem('changeCounter')
        if (localValueChangeCounter) {
            let newLocalValueChangeCounter = JSON.parse(localValueChangeCounter);
            setChangeCounter(newLocalValueChangeCounter);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('changeCounter', JSON.stringify(changeCounter));
    }, [changeCounter])

    return (
        <div className="App">
            <div className="toggleCounterButton">
                <button onClick={onClickHandlerChangeCounter}>Сменить вид счётчика</button>
            </div>
            <div className="wrapper">
                { changeCounter ? <CounterTwoBlocks /> : <CounterTwoInOne /> }
            </div>
        </div>
    );
}