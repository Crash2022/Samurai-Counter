import React from 'react';
import '../../../App.css';
import stylesMain from '../../../styles/Counter.module.css'
import {CounterMonitor} from "./CounterMonitor";
import {CounterControl} from "./CounterControl";
import stylesDisplay from "../../../styles/DisplayCounter.module.css";
import {Button} from "../../../UI/Button";

export type DisplayCounterPropsType = {
    counter: number
    startValue: number
    maxValue: number
    increase: (counter: number) => void
    reset: () => void
    error: string | null
    isSetting: boolean
    messageStart: string
}

export const DisplayCounter: React.FC<DisplayCounterPropsType> = (props) => {

    const isInfo = props.error === props.messageStart;

    let counterMonitorStopStyle = `${ props.counter === props.maxValue ? stylesDisplay.counterMonitorStop : '' }`;
    let startValueMaxStopStyle = `${ props.error && !isInfo ? stylesMain.counterMonitorStopError : '' }`;
    let startValueTitleStyle = `${ isInfo ? stylesMain.counterMonitorStartTitle : '' }`;

    /*----------------------------------------------------------------------------*/

    const onClickHandlerStart = () => {
        props.increase(props.counter);
    }

    const onClickHandlerReset = () => {
        props.reset();
    }

    /*----------------------------------------------------------------------------*/

    return (
        <div className={stylesMain.displayCounter}>
            {/*<CounterMonitor counter={props.counter}
                            startValue={props.startValue}
                            maxValue={props.maxValue}
                            error={props.error}
                            messageStart={props.messageStart}
            />*/}

            <div className={`
                         ${stylesMain.counterMonitor} 
                         ${counterMonitorStopStyle} 
                         ${startValueMaxStopStyle}
                         ${startValueTitleStyle}
                       `}
            >
                { props.error ? props.error : props.counter }
            </div>

            {/*<CounterControl counter={props.counter}
                            increase={props.increase}
                            reset={props.reset}
                            startValue={props.startValue}
                            maxValue={props.maxValue}
                            isSetting={props.isSetting}
            />*/}

            <div className={stylesDisplay.counterControl}>
                <div className={stylesDisplay.increase}>
                    <Button name={'Увеличить'}
                            callback={onClickHandlerStart}
                            //disabled={props.counter === props.maxValue || props.isSetting}
                    />
                </div>
                <div className={stylesDisplay.reset}>
                    <Button name={'Сбросить'}
                            callback={onClickHandlerReset}
                            //disabled={props.counter === props.startValue || props.isSetting}
                    />
                </div>
            </div>

        </div>
    );
}