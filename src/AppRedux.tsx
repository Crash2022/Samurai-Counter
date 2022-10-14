import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterRedux} from "./components/CounterRedux/Counter/CounterRedux";

export const AppRedux = () => {

    // const [changeCounter, setChangeCounter] = useState<boolean>(true);
    //
    // const onClickHandlerChangeCounter = () => {
    //     setChangeCounter(!changeCounter);
    // }

    // useEffect(() => {
    //     let localValueChangeCounter = localStorage.getItem('changeCounter')
    //     if (localValueChangeCounter) {
    //         let newLocalValueChangeCounter = JSON.parse(localValueChangeCounter);
    //         setChangeCounter(newLocalValueChangeCounter);
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('changeCounter', JSON.stringify(changeCounter));
    // }, [changeCounter])

    return (
        <div className="App">
            <div className="wrapper">
                {/*<CounterRedux />*/} На всякий случай оставлю компоненту
            </div>
        </div>
    );
}