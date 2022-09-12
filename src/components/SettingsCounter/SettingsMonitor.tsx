import React from 'react';
import '../../App.css';
import stylesMain from '../Counter/Counter.module.css'
import stylesSet from './SettingsCounter.module.css'
import {SettingsMonitorItem} from "./SettingsMonitorItem";

export const SettingsMonitor = () => {

    return (
        <div className={stylesMain.counterMonitor}>
            <div className={stylesSet.settingsMonitor}>
                <SettingsMonitorItem title={'MAX value'}/>
                <SettingsMonitorItem title={'START value'}/>
            </div>
        </div>
    );
}