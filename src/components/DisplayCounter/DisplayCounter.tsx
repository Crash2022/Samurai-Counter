import React from 'react';
import '../../App.css';
import stylesMain from '../Counter/Counter.module.css'
import {CounterMonitor} from "./CounterMonitor";
import {CounterControl} from "./CounterControl";

export type DisplayCounterPropsType = {
    counter: number
    startValue: number
    maxValue: number
    increase: () => void
    reset: () => void
    error: string | null
    setError: (errorValue: string) => void
    isSetting: boolean
    // disableInc: boolean
    // setDisableInc: (buttonValue: boolean) => void
    // disableReset: boolean
    // setDisableReset: (buttonValue: boolean) => void
}

export const DisplayCounter: React.FC<DisplayCounterPropsType> = (props) => {

    return (
        <div className={stylesMain.displayCounter}>
            <CounterMonitor counter={props.counter}
                            startValue={props.startValue}
                            maxValue={props.maxValue}
                            error={props.error}
                            setError={props.setError}
            />
            <CounterControl counter={props.counter}
                            increase={props.increase}
                            reset={props.reset}
                            startValue={props.startValue}
                            maxValue={props.maxValue}
                            isSetting={props.isSetting}
                            // disableInc={props.disableInc}
                            // setDisableInc={props.setDisableInc}
                            // disableReset={props.disableReset}
                            // setDisableReset={props.setDisableReset}
            />
        </div>
    );
}