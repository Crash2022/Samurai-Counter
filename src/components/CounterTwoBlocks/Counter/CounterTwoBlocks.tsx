import React, {useEffect, useState} from 'react';
import '../../../App.css';
import {SettingsCounter} from "../SettingsCounter/SettingsCounter";
import {DisplayCounter} from "../DisplayCounter/DisplayCounter";

export const CounterTwoBlocks = () => {

    const [inputStartValue, setInputStartValue] = useState<number>(0);
    const [inputMaxValue, setInputMaxValue] = useState<number>(0);

    const [counter, setCounter] = useState<number>(0);
    const [isSetting, setIsSetting] = useState<boolean>(true);

    /*type MessageInfo = {
        text: string
        isError: boolean
    }*/

    //const [error, setError] = useState<MessageInfo> | null>(null);

    const [error, setError] = useState<string | null>('');

    const MESSAGE_START = 'Введите значения и нажмите кнопку установить';
    const MESSAGE_START_NULL = '';
    const MESSAGE_ZERO = 'Значение должно быть больше 0!';
    const MESSAGE_START_LESS_MAX = 'Начальное значение должно быть меньше максимального!';
    const MESSAGE_START_NOT_MAX = 'Начальное значение не должно равняться максимальному!';
    const MESSAGE_VALUE_NOT_INTEGER = 'Значение должно быть целым числом!';

    useEffect(() => {
        if (inputStartValue > inputMaxValue) {
            setError(`${MESSAGE_START_LESS_MAX}`);
            //setError(text:'Начальное значение должно быть меньше максимального!', isError: true);
        } else {
            setError(`${MESSAGE_START_NULL}`);
        }
        if (inputStartValue === inputMaxValue) {
            setError(`${MESSAGE_START_NOT_MAX}`);
        }
        if (inputStartValue < 0) {
            setError(`${MESSAGE_ZERO}`);
        }
        if (inputMaxValue < 0) {
            setError(`${MESSAGE_ZERO}`);
        }
        if (!Number.isInteger(inputMaxValue)) {
            setError(`${MESSAGE_VALUE_NOT_INTEGER}`);
        }
        if (!Number.isInteger(inputStartValue)) {
            setError(`${MESSAGE_VALUE_NOT_INTEGER}`);
        }
    }, [inputStartValue, inputMaxValue]);

    const pushValue = () => {

        if (inputStartValue > inputMaxValue) {
            setError(`${MESSAGE_START_LESS_MAX}`);
        } else {
            setIsSetting(false);
            setCounter(inputStartValue);
            setInputStartValue(inputStartValue);
            setInputMaxValue(inputMaxValue);
            setError('');
        }
    }

    const increaseCounter = () => {
        let newCount = counter + 1;
        setCounter(newCount);
    }

    const resetCounter = () => {
        setCounter(inputStartValue);
    }

    /*--------------------------------------------*/

    // важен порядок использования useEffect

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

        let localValueSetButton = localStorage.getItem('isSetting')
        if (localValueSetButton) {
            let newLocalValueSetButton = JSON.parse(localValueSetButton);
            setIsSetting(newLocalValueSetButton);
        }

        let localCounterValue = localStorage.getItem('counter')
        if (localCounterValue) {
            let newLocalCounterValue = JSON.parse(localCounterValue);
            setCounter(newLocalCounterValue);
        }

        let localErrorValue = localStorage.getItem('error')
        console.log('localErrorValue', localErrorValue)
        if (localErrorValue) {
            let newLocalErrorValue = JSON.parse(localErrorValue);
            setError(newLocalErrorValue);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('inputMaxValue', JSON.stringify(inputMaxValue));
        localStorage.setItem('inputStartValue', JSON.stringify(inputStartValue));
        localStorage.setItem('isSetting', JSON.stringify(isSetting));
        localStorage.setItem('counter', JSON.stringify(counter));
        localStorage.setItem('error', JSON.stringify(error));
    }, [inputStartValue, inputMaxValue, isSetting, counter, error])

    /*--------------------------------------------*/

    return (
        <div className="counterWrapper">
            <SettingsCounter startValue={inputStartValue}
                             setInputStartValue={setInputStartValue}
                             maxValue={inputMaxValue}
                             setInputMaxValue={setInputMaxValue}
                             pushValue={pushValue}
                             isSetting={isSetting}
                             setIsSetting={setIsSetting}
            />
            <DisplayCounter counter={counter}
                            startValue={inputStartValue}
                            maxValue={inputMaxValue}
                            increase={increaseCounter}
                            reset={resetCounter}
                            error={error}
                            isSetting={isSetting}
                            messageStart={MESSAGE_START}
            />
        </div>
    );
}