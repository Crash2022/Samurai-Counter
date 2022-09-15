import React, {useEffect, useState} from 'react';
import '../../App.css';
import {SettingsCounter} from "../SettingsCounter/SettingsCounter";
import {DisplayCounter} from "../DisplayCounter/DisplayCounter";

export const Counter = () => {

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

    useEffect(() => {
        let localValueMax = localStorage.getItem('inputMaxValue')
        if (localValueMax) {
            let newLocalValueMax = JSON.parse(localValueMax);
            setInputMaxValue(newLocalValueMax);
        }

        let localValueStart = localStorage.getItem('inputStartValue')
        if (localValueStart) {
            let newLocalValueStart = JSON.parse(localValueStart);
            setInputStartValue(newLocalValueStart);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('inputMaxValue', JSON.stringify(inputMaxValue));
        localStorage.setItem('inputStartValue', JSON.stringify(inputStartValue));
    }, [inputStartValue, inputMaxValue])

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
                             isSetting={isSetting}
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