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

    const increaseCounter = () => {
        if (inputStartValue > inputMaxValue) {
            setError('Начальное значение должно быть меньше максимального');
        } else {
            let newCount = counter + 1;
            setCounter(newCount);
        }
    }

    const resetCounter = () => {
        setCounter(inputStartValue);
    }

    /*--------------------------------------------*/

    const [inputStartValue, setInputStartValue] = useState<number>(0);
    const [inputMaxValue, setInputMaxValue] = useState<number>(0);

    const [counter, setCounter] = useState<number>(0);
    const [disabled, setDisabled] = useState<boolean>(true);

    //const START_VALUE = inputStartValue;
    //const MAX_VALUE = inputMaxValue;

    const [error, setError] = useState<string | null>(null);

    const pushValue = () => {

        if (inputStartValue > inputMaxValue) {
            setError('Начальное значение должно быть меньше максимального');
        } else {
            setDisabled(false);
            setCounter(inputStartValue);
            setInputStartValue(inputStartValue);
            setInputMaxValue(inputMaxValue);
            setError('');
        }
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
                             setError={setError}
            />
            <DisplayCounter counter={counter}
                            startValue={inputStartValue}
                            maxValue={inputMaxValue}
                            increase={increaseCounter}
                            reset={resetCounter}
                            error={error}
                            setError={setError}
                            disabled={disabled}
                            setDisabled={setDisabled}
            />
        </div>
    );
}