import React, {useState} from 'react';
import '../../App.css';
import styles from '../Counter/Counter.module.css'
import {SettingsMonitor} from "./SettingsMonitor";
import {SettingsControl} from "./SettingsControl";

export const SettingsCounter = () => {

    return (
        <div className={styles.counter}>
            <SettingsMonitor />
            <SettingsControl />
        </div>
    );
}