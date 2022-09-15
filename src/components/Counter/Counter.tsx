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

    //const START_VALUE = inputStartValue;
    //const MAX_VALUE = inputMaxValue;

    const [inputStartValue, setInputStartValue] = useState<number>(0);
    const [inputMaxValue, setInputMaxValue] = useState<number>(0);

    const [counter, setCounter] = useState<number>(0);
    // const [disableInc, setDisableInc] = useState<boolean>(true);
    // const [disableReset, setDisableReset] = useState<boolean>(true);
    const [isSetting, setIsSetting] = useState<boolean>(true);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (inputStartValue > inputMaxValue) {
            setError('Начальное значение должно быть меньше максимального');
            //setDisableReset(true);
        } else {
            setError('');
        }
    },[inputStartValue, inputMaxValue]);

    const pushValue = () => {

        if (inputStartValue > inputMaxValue) {
            setError('Начальное значение должно быть меньше максимального');
        } else {
            // setDisableInc(false);
            // setDisableReset(false);
            setIsSetting(false);
            setCounter(inputStartValue);
            setInputStartValue(inputStartValue);
            setInputMaxValue(inputMaxValue);
            setError('');
        }
    }

    const increaseCounter = () => {
        // if (inputStartValue < inputMaxValue) {
            let newCount = counter + 1;
            setCounter(newCount);
        // } else {
        //     setDisableReset(true);
        // }
    }

    const resetCounter = () => {
        if (counter === inputStartValue) {
            // setDisableReset(true);
        }
        // setDisableInc(false);
        setCounter(inputStartValue);
    }

    /*--------------------------------------------*/

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
                             setIsSetting={setIsSetting}
            />
            <DisplayCounter counter={counter}
                            startValue={inputStartValue}
                            maxValue={inputMaxValue}
                            increase={increaseCounter}
                            reset={resetCounter}
                            error={error}
                            setError={setError}
                            isSetting={isSetting}
                            // disableInc={disableInc}
                            // setDisableInc={setDisableInc}
                            // disableReset={disableReset}
                            // setDisableReset={setDisableReset}
            />
        </div>
    );
}