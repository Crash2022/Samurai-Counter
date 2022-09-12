import React, {useState} from 'react';
import '../../App.css';
import styles from '../Counter/Counter.module.css'
import {SettingsMonitorItem} from "./SettingsMonitorItem";

export const SettingsMonitor = () => {


    return (
        <div className={styles.counterMonitor}>
            <div className={styles.settingsMonitor}>
                <SettingsMonitorItem title={'MAX value'}/>
                <SettingsMonitorItem title={'START value'}/>
            </div>
        </div>
    );
}