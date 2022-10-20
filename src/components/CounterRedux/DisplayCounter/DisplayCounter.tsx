import React from 'react';
import '../../../App.css';
import stylesMain from '../../../styles/Counter.module.css'
import stylesDisplay from "../../../styles/DisplayCounter.module.css";
import {Button} from "../../../UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {increaseCounterAC, InitialStateType, resetCounterAC} from "../../../redux/counter-reducer";
import {AppRootStateType} from "../../../redux/store";

export type DisplayCounterPropsType = {
    error: string | null
    messageStart: string //MESSAGE_START_LESS_MAX
}

export const DisplayCounter: React.FC<DisplayCounterPropsType> = (props) => {

    const dispatch = useDispatch();
    const counter = useSelector<AppRootStateType, InitialStateType>( state => state.counter);

    const isInfo = props.error === props.messageStart;

    let counterMonitorStopStyle = `${ counter.counter === counter.maxValue ? stylesDisplay.counterMonitorStop : '' }`;
    let startValueMaxStopStyle = `${ props.error && !isInfo ? stylesMain.counterMonitorStopError : '' }`;
    let startValueTitleStyle = `${ isInfo ? stylesMain.counterMonitorStartTitle : '' }`;

    /*----------------------------------------------------------------------------*/

    const onClickHandlerStart = () => {
        dispatch(increaseCounterAC(counter.counter));
    }

    const onClickHandlerReset = () => {
        dispatch(resetCounterAC(counter.startValue));
    }

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
                { props.error ? props.error : counter.counter }
            </div>

            <div className={stylesDisplay.counterControl}>
                <div className={stylesDisplay.increase}>
                    <Button name={'Увеличить'}
                            callback={onClickHandlerStart}
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