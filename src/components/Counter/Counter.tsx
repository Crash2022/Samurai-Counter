import React, {useEffect, useState} from 'react';
import '../../App.css';
import {SettingsCounter} from "../SettingsCounter/SettingsCounter";
import {DisplayCounter} from "../DisplayCounter/DisplayCounter";

export const Counter = () => {

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

    const START_MESSAGE = 'Введите значения и нажмите кнопку установить';

    useEffect(() => {
        if (inputStartValue > inputMaxValue) {
            setError('Начальное значение должно быть меньше максимального!');
            //setError(text:'Начальное значение должно быть меньше максимального!', isError: true);
        } else {
            setError(`${START_MESSAGE}`);
        }
        if (inputStartValue === inputMaxValue) {
            setError('Начальное значение не должно равняться максимальному!');
        }
        if (inputStartValue < 0) {
            setError('Значение должно быть больше 0!');
        }
        if (inputMaxValue < 0) {
            setError('Значение должно быть больше 0!');
        }
    },[inputStartValue, inputMaxValue]);

    const pushValue = () => {

        if (inputStartValue > inputMaxValue) {
            setError('Начальное значение должно быть меньше максимального!');
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
                            startMessage={START_MESSAGE}
            />
        </div>
    );
}