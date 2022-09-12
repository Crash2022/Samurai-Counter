import React from 'react';
import '../../App.css';
import stylesMain from '../Counter/Counter.module.css'
import {SettingsMonitor} from "./SettingsMonitor";
import {SettingsControl} from "./SettingsControl";

export type SettingsCounterPropsType = {
    counter: number
    startValue: (startValue: number) => void
    maxValue: (startValue: number) => void
    pushValue: () => void
}

export const SettingsCounter: React.FC<SettingsCounterPropsType> = (props) => {

    return (
        <div className={stylesMain.displayCounter}>
            <SettingsMonitor counter={props.counter}
                             startValue={props.startValue}
                             maxValue={props.maxValue}
            />
            <SettingsControl pushValue={props.pushValue}/>
        </div>
    );
}