import React, {useEffect} from 'react';
import '../../../App.css';
import {SettingsCounter} from "../SettingsCounter/SettingsCounter";
import {DisplayCounter} from "../DisplayCounter/DisplayCounter";
import {setErrorAC} from "../../../redux/counter-reducer";
import {useDispatch} from "react-redux";

export const CounterRedux = () => {

    const dispatch = useDispatch();

    /*-------------------------------------------------------------------*/

    useEffect(() => {
        dispatch(setErrorAC());
    },[]);

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
                    <SettingsCounter/>
                    <DisplayCounter/>
                </div>
            </div>
        </div>
    );
}