import React from 'react';
import '../../App.css';
import stylesMain from '../Counter/Counter.module.css'
import {SettingsMonitor} from "./SettingsMonitor";
import {SettingsControl} from "./SettingsControl";

export type SettingsCounterPropsType = {

}

export const SettingsCounter: React.FC<SettingsCounterPropsType> = () => {

    return (
        <div className={stylesMain.displayCounter}>
            <SettingsMonitor />
            <SettingsControl />
        </div>
    );
}