import React from 'react';
import '../../../App.css';
import stylesMain from '../../../styles/Counter.module.css'
import {CounterMonitor} from "./CounterMonitor";
import {CounterControl} from "./CounterControl";

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
    setError: (errorValue: string) => void
    isSetting: boolean
    startMessage: string
    settingsOn: boolean
    setSettingsOn: () => void
}

export const DisplayCounter: React.FC<DisplayCounterPropsType> = (props) => {

    return (
        <div className={stylesMain.displayCounterV2}>
            <CounterMonitor counter={props.counter}
                            startValue={props.startValue}
                            maxValue={props.maxValue}
                            error={props.error}
                            setError={props.setError}
                            startMessage={props.startMessage}
            />
            <CounterControl counter={props.counter}
                            increase={props.increase}
                            reset={props.reset}
                            startValue={props.startValue}
                            maxValue={props.maxValue}
                            isSetting={props.isSetting}
                            settingsOn={props.settingsOn}
                            setSettingsOn={props.setSettingsOn}
            />
        </div>
    );
}