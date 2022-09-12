import React from 'react';
import '../../App.css';
import stylesMain from '../Counter/Counter.module.css'
import stylesSet from './SettingsCounter.module.css'
import {SettingsMonitorItemMax} from "./SettingsMonitorItemMax";
import {SettingsMonitorItemStart} from "./SettingsMonitorItemStart";

export const SettingsMonitor = () => {

    return (
        <div className={stylesMain.counterMonitor}>
            <div className={stylesSet.settingsMonitor}>
                <SettingsMonitorItemMax title={'Макс. значение'}/>
                <SettingsMonitorItemStart title={'Начальное значение'}/>
            </div>
        </div>
    );
}