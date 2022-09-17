import React from 'react';
import '../../../App.css';
import stylesMain from '../../../styles/Counter.module.css'
//import {CounterMonitor} from "./CounterMonitor";
//import {CounterControl} from "./CounterControl";
import stylesDisplay from "../../../styles/DisplayCounter.module.css";
import {Button} from "../../../UI/Button";

export type DisplayCounterPropsType = {
    counter: number
    startValue: number
    setInputStartValue: (startValue: number) => void
    maxValue: number
    setInputMaxValue: (startValue: number) => void
    pushValue: () => void
    increase: () => void
    reset: () => void
    error: string | null
    isSetting: boolean
    messageStart: string
    setSettingsOn: () => void
}

export const DisplayCounter: React.FC<DisplayCounterPropsType> = (props) => {

    const onClickHandlerStart = () => {
        props.increase();
    }

    const onClickHandlerReset = () => {
        props.reset();
    }

    const onClickHandlerSettingsOn = () => {
        props.setSettingsOn();
    }

    const isInfo = props.error === props.messageStart;

    let counterMonitorStopStyle = `${ props.counter === props.maxValue ? stylesDisplay.counterMonitorStop : '' }`;
    let startValueMaxStopStyle = `${ props.error && !isInfo ? stylesMain.counterMonitorStopError : '' }`;
    let startValueTitleStyle = `${ isInfo ? stylesMain.counterMonitorStartTitle : '' }`;

    return (
        <div className={stylesMain.displayCounterV2}>

            <div className={`
                         ${stylesMain.counterMonitor} 
                         ${counterMonitorStopStyle}
                         ${startValueMaxStopStyle}
                         ${startValueTitleStyle}
                       `}
            >
                {props.error ? props.error : props.counter}
            </div>

            <div className={stylesDisplay.counterControl}>
                <div className={stylesDisplay.increase}>
                    <Button name={'Увеличить'}
                            callback={onClickHandlerStart}
                            disabled={props.counter === props.maxValue || props.isSetting}
                    />
                </div>
                <div className={stylesDisplay.reset}>
                    <Button name={'Сбросить'}
                            callback={onClickHandlerReset}
                            disabled={props.counter === props.startValue || props.isSetting}
                    />
                </div>
                <div className={stylesDisplay.settings}>
                    <Button name={'Настройки'}
                            callback={onClickHandlerSettingsOn}
                            disabled={false}
                    />
                </div>
            </div>

            {/*<CounterMonitor counter={props.counter}
                            startValue={props.startValue}
                            maxValue={props.maxValue}
                            error={props.error}
                            messageStart={props.messageStart}
            />
            <CounterControl counter={props.counter}
                            increase={props.increase}
                            reset={props.reset}
                            startValue={props.startValue}
                            maxValue={props.maxValue}
                            isSetting={props.isSetting}
                            setSettingsOn={props.setSettingsOn}
            />*/}
        </div>
    );
}