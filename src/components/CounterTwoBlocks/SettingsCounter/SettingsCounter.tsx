import React from 'react';
import '../../../App.css';
import stylesMain from '../../../styles/Counter.module.css'
import {SettingsMonitor} from "./SettingsMonitor";
import {SettingsControl} from "./SettingsControl";

export type SettingsCounterPropsType = {
    counter: number
    startValue: number
    setInputStartValue: (startValue: number) => void
    maxValue: number
    setInputMaxValue: (startValue: number) => void
    pushValue: () => void
    error: string | null
    setError: (errorValue: string) => void
    isSetting: boolean
    setIsSetting: (isSetting: boolean) => void
}

export const SettingsCounter: React.FC<SettingsCounterPropsType> = (props) => {

    return (
        <div className={stylesMain.displayCounter}>
            <SettingsMonitor counter={props.counter}
                             startValue={props.startValue}
                             setInputStartValue={props.setInputStartValue}
                             maxValue={props.maxValue}
                             setInputMaxValue={props.setInputMaxValue}
                             setIsSetting={props.setIsSetting}
            />
            <SettingsControl pushValue={props.pushValue}
                             startValue={props.startValue}
                             maxValue={props.maxValue}
                             isSetting={props.isSetting}
            />
        </div>
    );
}