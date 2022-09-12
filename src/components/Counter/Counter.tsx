import React, {useEffect, useState} from 'react';
import '../../App.css';
import {SettingsCounter} from "../SettingsCounter/SettingsCounter";
import {DisplayCounter} from "../DisplayCounter/DisplayCounter";

export const Counter = () => {

    /*const setLocalStorage = () => {
        localStorage.setItem('countValue', JSON.stringify(counter))
    }
    const getLocalStorage = () => {
        let localValue = localStorage.getItem('countValue')
        if (localValue) {
            let newLocalValue = JSON.parse(localValue)
            setCounter(newLocalValue)
        }
    }*/

    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        let localValue = localStorage.getItem('countValue')
        if (localValue) {
            let newLocalValue = JSON.parse(localValue);
            setCounter(newLocalValue);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(counter));
    }, [counter])

    const START_VALUE = 0;
    const MAX_VALUE = 5;

    const IncreaseCounter = () => {
        let newCount = counter + 1;
        setCounter(newCount);
    }

    const ResetCounter = () => {
        setCounter(0);
    }

    return (
        <div className="counterWrapper">
            <SettingsCounter />
            <DisplayCounter counter={counter}
                            startValue={START_VALUE}
                            maxValue={MAX_VALUE}
                            increase={IncreaseCounter}
                            reset={ResetCounter}/>
        </div>
    );
}