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
    disabled: boolean
    setDisabled: (buttonValue: boolean) => void
}

export const DisplayCounter: React.FC<DisplayCounterPropsType> = (props) => {

    return (
        <div className={stylesMain.displayCounter}>
            <CounterMonitor counter={props.counter}
                            maxValue={props.maxValue}
                            error={props.error}
                            setError={props.setError}
            />
            <CounterControl counter={props.counter}
                            increase={props.increase}
                            reset={props.reset}
                            startValue={props.startValue}
                            maxValue={props.maxValue}
                            disabled={props.disabled}
                            setDisabled={props.setDisabled}
            />
        </div>
    );
}