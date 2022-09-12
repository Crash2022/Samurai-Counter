import React, {useState} from 'react';
import '../../App.css';
import styles from '../Counter/Counter.module.css'
import {SettingsMonitor} from "./SettingsMonitor";
import {SettingsControl} from "./SettingsControl";

export const SettingsCounter = () => {

    //const SET_START_VALUE = 0;
    //const SET_MAX_VALUE = 5;

    return (
        <div className={styles.counter}>
            <SettingsMonitor />
            <SettingsControl />
        </div>
    );
}