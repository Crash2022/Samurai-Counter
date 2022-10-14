import React, {useEffect, useState} from 'react';
import '../../../App.css';
import {SettingsCounter} from "../SettingsCounter/SettingsCounter";
import {DisplayCounter} from "../DisplayCounter/DisplayCounter";

export const CounterTwoInOne = () => {

    const [inputStartValue, setInputStartValue] = useState<number>(0);
    const [inputMaxValue, setInputMaxValue] = useState<number>(0);

    const [counter, setCounter] = useState<number>(0);
    const [isSetting, setIsSetting] = useState<boolean>(true);

    const [error, setError] = useState<string | null>('');

    const [settingsOn, setSettingsOn] = useState<boolean>(false);

    const MESSAGE_START = 'Зайдите в настройки и установите значения';
    const MESSAGE_START_NULL = '';
    //const MESSAGE_ZERO = 'Значение должно быть больше 0!';
    const MESSAGE_START_LESS_MAX = 'Начальное значение должно быть меньше максимального!';
    //const MESSAGE_START_NOT_MAX = 'Начальное значение не должно равняться максимальному!';

    useEffect(() => {
        if (inputStartValue > inputMaxValue) {
            setError(`${MESSAGE_START_LESS_MAX}`);
        } else {
            setError(`${MESSAGE_START_NULL}`);
        }
        /*if (inputStartValue === inputMaxValue) {
            setError(`${MESSAGE_START_NOT_MAX}`);
        }
        if (inputStartValue < 0) {
            setError(`${MESSAGE_ZERO}`);
        }
        if (inputMaxValue < 0) {
            setError(`${MESSAGE_ZERO}`);
        }*/
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
            setSettingsOn(!settingsOn);
        }
    }

    const increaseCounter = () => {
        let newCount = counter + 1;
        setCounter(newCount);
    }

    const resetCounter = () => {
        setCounter(inputStartValue);
    }

    const onClickHandlerChangeSettingsOn = () => {
        setSettingsOn(!settingsOn);
    }

    /*--------------------------------------------*/

    // важен порядок использования useEffect

    useEffect(() => {
        let localValueMax2 = localStorage.getItem('inputMaxValue2')
        if (localValueMax2) {
            let newLocalValueMax2 = JSON.parse(localValueMax2);
            setInputMaxValue(newLocalValueMax2);
        }

        let localValueStart2 = localStorage.getItem('inputStartValue2')
        if (localValueStart2) {
            let newLocalValueStart2 = JSON.parse(localValueStart2);
            setInputStartValue(newLocalValueStart2);
        }

        let localValueSetButton2 = localStorage.getItem('isSetting2')
        if (localValueSetButton2) {
            let newLocalValueSetButton2 = JSON.parse(localValueSetButton2);
            setIsSetting(newLocalValueSetButton2);
        }

        let localCounterValue2 = localStorage.getItem('counter2')
        if (localCounterValue2) {
            let newLocalCounterValue2 = JSON.parse(localCounterValue2);
            setCounter(newLocalCounterValue2);
        }

        let localErrorValue2 = localStorage.getItem('error2')
        if (localErrorValue2) {
            let newLocalErrorValue2 = JSON.parse(localErrorValue2);
            setError(newLocalErrorValue2);
        }

        let localValueSettingsButton2 = localStorage.getItem('settingsOn2')
        if (localValueSettingsButton2) {
            let newLocalValueSettingsButton2 = JSON.parse(localValueSettingsButton2);
            setSettingsOn(newLocalValueSettingsButton2);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('inputMaxValue2', JSON.stringify(inputMaxValue));
        localStorage.setItem('inputStartValue2', JSON.stringify(inputStartValue));
        localStorage.setItem('isSetting2', JSON.stringify(isSetting));
        localStorage.setItem('counter2', JSON.stringify(counter));
        localStorage.setItem('error2', JSON.stringify(error));
        localStorage.setItem('settingsOn2', JSON.stringify(settingsOn));
    }, [inputStartValue, inputMaxValue, isSetting, counter, error, settingsOn])

    /*--------------------------------------------*/

    return (
        <div className="counterWrapper">
            {
                settingsOn
                    ? <SettingsCounter startValue={inputStartValue}
                                       setInputStartValue={setInputStartValue}
                                       maxValue={inputMaxValue}
                                       setInputMaxValue={setInputMaxValue}
                                       pushValue={pushValue}
                                       isSetting={isSetting}
                                       setIsSetting={setIsSetting}
                    />
                    : <DisplayCounter counter={counter}
                                      startValue={inputStartValue}
                                      maxValue={inputMaxValue}
                                      pushValue={pushValue}
                                      increase={increaseCounter}
                                      reset={resetCounter}
                                      error={error}
                                      isSetting={isSetting}
                                      messageStart={MESSAGE_START}
                                      setSettingsOn={onClickHandlerChangeSettingsOn}
                    />
            }
        </div>
    );
}