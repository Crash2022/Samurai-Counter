import React, {useEffect, useReducer, useState} from 'react';
import '../../../App.css';
import {SettingsCounter} from "../SettingsCounter/SettingsCounter";
import {DisplayCounter} from "../DisplayCounter/DisplayCounter";
import {
    counterReducer,
    increaseCounterAC,
    initialState,
    setMaxValueAC,
    setStartValueAC
} from "../../../redux/counter-reducer";
import {setCounterAC} from "../../../redux/counter-reducer";

export const CounterRedux = () => {

    //const [inputMaxValue, setInputMaxValue] = useState<number>(0);
    const [inputMaxValue, dispatchToMaxValueReducer] = useReducer(counterReducer, initialState);

    //const [inputStartValue, setInputStartValue] = useState<number>(0);
    const [inputStartValue, dispatchToStartValueReducer] = useReducer(counterReducer, initialState);

    //const [counter, setCounter] = useState<number>(0);
    const [counter, dispatchToCounterReducer] = useReducer(counterReducer, initialState);

    //const [isSetting, setIsSetting] = useState<boolean>(true);
    const [isSetting, dispatchToSettingReducer] = useReducer(counterReducer, initialState);

    /*-------------------------------------------------------------------*/

    const [error, setError] = useState<string | null>('');

    const warningMessages = {
        MESSAGE_START: 'Введите значения и нажмите кнопку установить',
        MESSAGE_START_NULL: '',
        MESSAGE_ZERO: 'Значение должно быть больше 0!',
        MESSAGE_START_LESS_MAX: 'Начальное значение должно быть меньше максимального!',
        MESSAGE_START_NOT_MAX: 'Начальное значение не должно равняться максимальному!',
        MESSAGE_VALUE_NOT_INTEGER: 'Значение должно быть целым числом!'
    }

    /*-------------------------------------------------------------------*/

    useEffect(() => {
        if (inputStartValue > inputMaxValue) {
            setError(warningMessages.MESSAGE_START_LESS_MAX);
        } else {
            setError(warningMessages.MESSAGE_START_NULL);
        }
        if (inputStartValue === inputMaxValue) {
            setError(warningMessages.MESSAGE_START_NOT_MAX);
        }
        if (inputStartValue < 0) {
            setError(warningMessages.MESSAGE_ZERO);
        }
        if (inputMaxValue < 0) {
            setError(warningMessages.MESSAGE_ZERO);
        }
        if (!Number.isInteger(inputMaxValue)) {
            setError(warningMessages.MESSAGE_VALUE_NOT_INTEGER);
        }
        if (!Number.isInteger(inputStartValue)) {
            setError(warningMessages.MESSAGE_VALUE_NOT_INTEGER);
        }
    }, [inputStartValue, inputMaxValue]);

    const pushValue = () => {

        if (inputStartValue > inputMaxValue) {
            setError(warningMessages.MESSAGE_START_LESS_MAX);
        } else {
            //setIsSetting(false);
            dispatchToSettingReducer(setCounterAC(false));

            //setCounter(inputStartValue);
            dispatchToCounterReducer(setStartValueAC(0));

            //setInputStartValue(inputStartValue);
            dispatchToStartValueReducer(setStartValueAC(0))

            //setInputMaxValue(inputMaxValue);
            dispatchToMaxValueReducer(setMaxValueAC(0))

            setError('');
        }
    }

    const increaseCounter = (counter: number) => {
        // let newCount = counter + 1;
        // setCounter(newCount);
        dispatchToCounterReducer(increaseCounterAC(counter));
    }

    const resetCounter = () => {
        //setCounter(inputStartValue);
        dispatchToCounterReducer(setStartValueAC(0));
    }

    const setIsSettingDispatch = (isSetting: boolean) => {
        dispatchToSettingReducer(setCounterAC(isSetting));
    }

    /*--------------------------------------------*/

    // важен порядок использования useEffect

    // useEffect(() => {
    //     let localValueMax = localStorage.getItem('inputMaxValue')
    //     if (localValueMax) {
    //         let newLocalValueMax = JSON.parse(localValueMax);
    //         setInputMaxValue(newLocalValueMax);
    //     }
    //
    //     let localValueStart = localStorage.getItem('inputStartValue')
    //     if (localValueStart) {
    //         let newLocalValueStart = JSON.parse(localValueStart);
    //         setInputStartValue(newLocalValueStart);
    //     }
    //
    //     let localValueSetButton = localStorage.getItem('isSetting')
    //     if (localValueSetButton) {
    //         let newLocalValueSetButton = JSON.parse(localValueSetButton);
    //         setIsSetting(newLocalValueSetButton);
    //     }
    //
    //     let localCounterValue = localStorage.getItem('counter')
    //     if (localCounterValue) {
    //         let newLocalCounterValue = JSON.parse(localCounterValue);
    //         setCounter(newLocalCounterValue);
    //     }
    //
    //     let localErrorValue = localStorage.getItem('error')
    //     console.log('localErrorValue', localErrorValue)
    //     if (localErrorValue) {
    //         let newLocalErrorValue = JSON.parse(localErrorValue);
    //         setError(newLocalErrorValue);
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('inputMaxValue', JSON.stringify(inputMaxValue));
    //     localStorage.setItem('inputStartValue', JSON.stringify(inputStartValue));
    //     localStorage.setItem('isSetting', JSON.stringify(isSetting));
    //     localStorage.setItem('counter', JSON.stringify(counter));
    //     localStorage.setItem('error', JSON.stringify(error));
    // }, [inputStartValue, inputMaxValue, isSetting, counter, error])

    /*--------------------------------------------*/

    return (
        <div className="App">
            <div className="wrapper">
                <div className="counterWrapper">
                    <SettingsCounter startValue={inputStartValue.startValue}
                                     setInputStartValue={setInputStartValue}
                                     maxValue={inputMaxValue.maxValue}
                                     setInputMaxValue={setInputMaxValue}
                                     pushValue={pushValue}
                                     isSetting={isSetting.isSetting}
                                     setIsSetting={setIsSettingDispatch}
                    />
                    <DisplayCounter counter={counter.counter}
                                    startValue={inputStartValue.startValue}
                                    maxValue={inputMaxValue.maxValue}
                                    increase={increaseCounter}
                                    reset={resetCounter}
                                    error={error}
                                    isSetting={isSetting.isSetting}
                                    messageStart={warningMessages.MESSAGE_START_LESS_MAX}
                    />
                </div>
            </div>
        </div>
    );
}