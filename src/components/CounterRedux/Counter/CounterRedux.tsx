import React, {useEffect, useState} from 'react';
import '../../../App.css';
import {SettingsCounter} from "../SettingsCounter/SettingsCounter";
import {DisplayCounter} from "../DisplayCounter/DisplayCounter";
import {InitialStateType, pushValueAC} from "../../../redux/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";

export const CounterRedux = () => {

    const dispatch = useDispatch();
    const counter = useSelector<AppRootStateType, InitialStateType>( state => state.counter);

    /*-------------------------------------------------------------------*/

    const [error, setError] = useState<string | null>('');

    const warningMessages = {
        //MESSAGE_START: 'Введите значения и нажмите кнопку установить',
        MESSAGE_START_NULL: '',
        MESSAGE_ZERO: 'Значение должно быть больше 0!',
        MESSAGE_START_LESS_MAX: 'Начальное значение должно быть меньше максимального!',
        MESSAGE_START_NOT_MAX: 'Начальное значение не должно равняться максимальному!',
        MESSAGE_VALUE_NOT_INTEGER: 'Значение должно быть целым числом!'
    }

    /*-------------------------------------------------------------------*/

    //useEffect для вывода сообщений об ошибках
    useEffect(() => {
        if (counter.startValue > counter.maxValue) {
            setError(warningMessages.MESSAGE_START_LESS_MAX);
        } else {
            setError(warningMessages.MESSAGE_START_NULL);
        }
        if (counter.startValue === counter.maxValue) {
            setError(warningMessages.MESSAGE_START_NOT_MAX);
        }
        if (counter.startValue < 0) {
            setError(warningMessages.MESSAGE_ZERO);
        }
        if (counter.maxValue < 0) {
            setError(warningMessages.MESSAGE_ZERO);
        }
        if (!Number.isInteger(counter.maxValue)) {
            setError(warningMessages.MESSAGE_VALUE_NOT_INTEGER);
        }
        if (!Number.isInteger(counter.startValue)) {
            setError(warningMessages.MESSAGE_VALUE_NOT_INTEGER);
        }
    }, [counter.startValue, counter.maxValue]);

    const pushValue = () => {

        if (counter.startValue > counter.maxValue) {
            setError(warningMessages.MESSAGE_START_LESS_MAX);
        } else {
            dispatch(pushValueAC(false, counter.counter, counter.startValue, counter.maxValue));
            setError(warningMessages.MESSAGE_START_NULL);
        }
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
                Redux
            </div>

            <div className="wrapper">
                <div className="counterWrapper">
                    <SettingsCounter pushValue={pushValue}/>
                    <DisplayCounter error={error}
                                    messageStart={warningMessages.MESSAGE_START_LESS_MAX}
                    />
                </div>
            </div>
        </div>
    );
}