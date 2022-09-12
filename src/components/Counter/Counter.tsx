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

    //const [counter, setCounter] = useState<number>(0);

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
        setCounter(inputStartValue);
    }

    /*--------------------------------------------*/

    const [inputStartValue, setInputStartValue] = useState<number>(0);
    const [inputMaxValue, setInputMaxValue] = useState<number>(0);

    const [counter, setCounter] = useState<number>(0);

    //const START_VALUE = inputStartValue;
    //const MAX_VALUE = inputMaxValue;

    const [error, setError] = useState<string | null>(null);

    const pushValue = () => {
            setCounter(inputStartValue);
            setInputStartValue(inputStartValue);
            setInputMaxValue(inputMaxValue);
    }

    return (
        <div className="counterWrapper">
            <SettingsCounter counter={counter}
                             startValue={inputStartValue}
                             setInputStartValue={setInputStartValue}
                             maxValue={inputMaxValue}
                             setInputMaxValue={setInputMaxValue}
                             pushValue={pushValue}
                             error={error}
                             setError={setError}/>
            <DisplayCounter counter={counter}
                            startValue={inputStartValue}
                            maxValue={inputMaxValue}
                            increase={IncreaseCounter}
                            reset={ResetCounter}
                            error={error}
                            setError={setError}/>
        </div>
    );
}