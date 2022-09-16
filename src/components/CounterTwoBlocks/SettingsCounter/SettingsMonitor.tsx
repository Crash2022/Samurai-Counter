import React from 'react';
import '../../../App.css';
import stylesMain from '../Counter/Counter.module.css'
import stylesSet from './SettingsCounter.module.css'
import {SettingsMonitorItemMax} from "./SettingsMonitorItemMax";
import {SettingsMonitorItemStart} from "./SettingsMonitorItemStart";

export type SettingsMonitorPropsType = {
    counter: number
    startValue: (startValue: number) => void
    maxValue: (maxValue: number) => void
}

export const SettingsMonitor: React.FC<SettingsMonitorPropsType> = (props) => {

    return (
        <div className={stylesMain.counterMonitor}>
            <div className={stylesSet.settingsMonitor}>
                <SettingsMonitorItemMax title={'Макс. значение'}
                                        counter={props.counter}
                                        maxValue={props.maxValue}/>
                <SettingsMonitorItemStart title={'Начальное значение'}
                                          counter={props.counter}
                                          startValue={props.startValue}
                />
            </div>
        </div>
    );
}