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

    /*useEffect(() => {
        let localValue = localStorage.getItem('countValue')
        if (localValue) {
            let newLocalValue = JSON.parse(localValue);
            setCounter(newLocalValue);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(counter));
    }, [counter])*/

    const IncreaseCounter = () => {
        let newCount = counter + 1;
        setCounter(newCount);
    }

    const ResetCounter = () => {
        setCounter(0);
    }

    /*--------------------------------------------*/

    const [inputStartValue, setInputStartValue] = useState<number>(0);
    const [inputMaxValue, setInputMaxValue] = useState<number>(5);

    const START_VALUE = inputStartValue;
    const MAX_VALUE = inputMaxValue;

    const pushValue = () => {
        setInputStartValue(inputStartValue);
        setInputMaxValue(inputMaxValue);
    }

    return (
        <div className="counterWrapper">
            <SettingsCounter counter={counter}
                             startValue={setInputStartValue}
                             maxValue={setInputMaxValue}
                             pushValue={pushValue}/>
            <DisplayCounter counter={counter}
                            startValue={START_VALUE}
                            maxValue={MAX_VALUE}
                            increase={IncreaseCounter}
                            reset={ResetCounter}/>
        </div>
    );
}