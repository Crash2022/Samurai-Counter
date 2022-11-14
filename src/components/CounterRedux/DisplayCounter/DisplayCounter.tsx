import React from 'react';
import '../../../App.css';
import stylesMain from '../../../styles/Counter.module.css'
import stylesDisplay from "../../../styles/DisplayCounter.module.css";
import {Button} from "../../../UI/Button";
import {useSelector} from "react-redux";
import {errorMessages,
    increaseCounterAC,
    resetCounterAC,
    InitialStateType, increaseCounterTC} from "../../../redux/counter-reducer";
import {AppRootStateType, useAppDispatch} from "../../../redux/store";

export const DisplayCounter = () => {

    const dispatch = useAppDispatch();
    const counter = useSelector<AppRootStateType, InitialStateType>( state => state.counter);

    const onClickHandlerIncrease = () => {
        dispatch(increaseCounterAC());

        // вариант через Thunk
        // dispatch(increaseCounterTC());
    }
    const onClickHandlerReset = () => {
        dispatch(resetCounterAC(counter.startValue));
    }

    /*----------------------------------------------------------------------------*/

    const isInfo = counter.errorMessage === errorMessages.MESSAGE_START_LESS_MAX;

    let counterMonitorStopStyle = `${ counter.counter === counter.maxValue ? stylesDisplay.counterMonitorStop : '' }`;
    let startValueMaxStopStyle = `${ counter.errorMessage && !isInfo ? stylesMain.counterMonitorStopError : '' }`;
    let startValueTitleStyle = `${ isInfo ? stylesMain.counterMonitorStartTitle : '' }`;

    /*----------------------------------------------------------------------------*/

    return (
        <div className={stylesMain.displayCounter}>

            <div className={`
                         ${stylesMain.counterMonitor} 
                         ${counterMonitorStopStyle} 
                         ${startValueMaxStopStyle}
                         ${startValueTitleStyle}
                       `}
            >
                { counter.errorMessage ? counter.errorMessage : counter.counter }
            </div>

            <div className={stylesDisplay.counterControl}>
                <div className={stylesDisplay.increase}>
                    <Button name={'Увеличить'}
                            callback={onClickHandlerIncrease}
                            disabled={counter.counter === counter.maxValue || counter.isSetting}
                    />
                </div>
                <div className={stylesDisplay.reset}>
                    <Button name={'Сбросить'}
                            callback={onClickHandlerReset}
                            disabled={counter.counter === counter.startValue || counter.isSetting}
                    />
                </div>
            </div>

        </div>
    );
}