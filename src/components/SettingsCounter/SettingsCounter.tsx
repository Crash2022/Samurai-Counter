import React from 'react';
import '../../App.css';
import stylesMain from '../Counter/Counter.module.css'
import {SettingsMonitor} from "./SettingsMonitor";
import {SettingsControl} from "./SettingsControl";

export const SettingsCounter = () => {

    return (
        <div className={stylesMain.displayCounter}>
            <SettingsMonitor />
            <SettingsControl />
        </div>
    );
}