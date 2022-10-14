import React from 'react';
import '../../../App.css';
import stylesMain from '../../../styles/Counter.module.css'
import stylesDisplay from "../../../styles/DisplayCounter.module.css";
import {Button} from "../../../UI/Button";

export type DisplayCounterPropsType = {
    counter: number
    startValue: number
    maxValue: number
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

        </div>
    );
}