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
    const MESSAGE_ZERO = 'Значение должно быть больше 0!';
    const MESSAGE_START_LESS_MAX = 'Начальное значение должно быть меньше максимального!';
    const MESSAGE_START_NOT_MAX = 'Начальное значение не должно равняться максимальному!';

    useEffect(() => {
        if (inputStartValue > inputMaxValue) {
            setError(`${MESSAGE_START_LESS_MAX}`);
            //setError(text:'Начальное значение должно быть меньше максимального!', isError: true);
        } else {
            setError(`${MESSAGE_START}`);
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
    },[inputStartValue, inputMaxValue]);

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
                            messageStart={MESSAGE_START}
            />
        </div>
    );
}