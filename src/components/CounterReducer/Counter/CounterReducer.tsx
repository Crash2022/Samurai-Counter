import React, {useEffect, useReducer, useState} from 'react';
import '../../../App.css';
import {SettingsCounter} from "../SettingsCounter/SettingsCounter";
import {DisplayCounter} from "../DisplayCounter/DisplayCounter";
import {//initialState,
    counterReducer, increaseCounterAC,
    setMaxValueAC, setStartValueAC,
    resetCounterAC, pushValueAC} from "../../../redux/counter-reducer";
import {setCounterAC} from "../../../redux/counter-reducer";

// export type InitialStateType = {
//     counter: number
//     maxValue: number
//     startValue: number
//     reset: number
//     isSetting: boolean
// }

export const CounterReducer = () => {

    //const [state, dispatchToReducer] = useReducer(counterReducer, initialState);
    const [state, dispatchToReducer] = useReducer(counterReducer, {
        counter: 0,
        maxValue: 0,
        startValue: 0,
        //reset: 0,
        isSetting: true
    });

    /*//const [inputMaxValue, setInputMaxValue] = useState<number>(0);
    //const [inputMaxValue, dispatchToMaxValueReducer] = useReducer(counterReducer, initialState);

    //const [inputStartValue, setInputStartValue] = useState<number>(0);
    //const [inputStartValue, dispatchToStartValueReducer] = useReducer(counterReducer, initialState);

    //const [counter, setCounter] = useState<number>(0);
    //const [counter, dispatchToCounterReducer] = useReducer(counterReducer, initialState);

    //const [isSetting, setIsSetting] = useState<boolean>(true);
    //const [isSetting, dispatchToSettingReducer] = useReducer(counterReducer, initialState);*/

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

    //useEffect для вывода сообщений об ошибках
    useEffect(() => {
        if (state.startValue > state.maxValue) {
            setError(warningMessages.MESSAGE_START_LESS_MAX);
        } else {
            setError(warningMessages.MESSAGE_START_NULL);
        }
        if (state.startValue === state.maxValue) {
            setError(warningMessages.MESSAGE_START_NOT_MAX);
        }
        if (state.startValue < 0) {
            setError(warningMessages.MESSAGE_ZERO);
        }
        if (state.maxValue < 0) {
            setError(warningMessages.MESSAGE_ZERO);
        }
        if (!Number.isInteger(state.maxValue)) {
            setError(warningMessages.MESSAGE_VALUE_NOT_INTEGER);
        }
        if (!Number.isInteger(state.startValue)) {
            setError(warningMessages.MESSAGE_VALUE_NOT_INTEGER);
        }
    }, [state.startValue, state.maxValue]);

    const pushValue = () => {

        if (state.startValue > state.maxValue) {
            setError(warningMessages.MESSAGE_START_LESS_MAX);
        } else {
           /* //setIsSetting(false);
            dispatchToReducer(setCounterAC(false));

            //setCounter(inputStartValue);
            dispatchToReducer(setStartValueAC(state.startValue));

            //setInputStartValue(inputStartValue);
            dispatchToReducer(setStartValueAC(state.startValue));

            //setInputMaxValue(inputMaxValue);
            dispatchToReducer(setMaxValueAC(state.maxValue));*/

            const action = pushValueAC(false, state.counter, state.startValue, state.maxValue);
            dispatchToReducer(action);
            setError('');
        }
    }

    const increaseCounter = () => {
        // let newCount = counter + 1;
        // setCounter(newCount);
        dispatchToReducer(increaseCounterAC(state.counter));
    }

    const resetCounter = () => {
        //setCounter(inputStartValue);
        dispatchToReducer(resetCounterAC(state.startValue));
    }

    const setIsSettingToDispatch = (isSetting: boolean) => {
        dispatchToReducer(setCounterAC(isSetting));
    }

    const setInputStartValueToDispatch = (startValue: number) => {
        dispatchToReducer(setStartValueAC(startValue));
    }
    const setInputMaxValueToDispatch = (maxValue: number) => {
        dispatchToReducer(setMaxValueAC(maxValue));
    }

    /*-------------------------------------------------------------------*/

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

    /*-------------------------------------------------------------------*/

    return (
        <div className="App">
            <div style={{textAlign: 'center', marginTop: '20px'}}>
                useReducer
            </div>
            <div className="wrapper">
                <div className="counterWrapper">
                    <SettingsCounter startValue={state.startValue}
                                     setInputStartValue={setInputStartValueToDispatch}
                                     maxValue={state.maxValue}
                                     setInputMaxValue={setInputMaxValueToDispatch}
                                     pushValue={pushValue}
                                     isSetting={state.isSetting}
                                     setIsSetting={setIsSettingToDispatch}
                    />
                    <DisplayCounter counter={state.counter}
                                    startValue={state.startValue}
                                    maxValue={state.maxValue}
                                    increase={increaseCounter}
                                    reset={resetCounter}
                                    error={error}
                                    isSetting={state.isSetting}
                                    messageStart={warningMessages.MESSAGE_START_LESS_MAX}
                    />
                </div>
            </div>
        </div>
    );
}