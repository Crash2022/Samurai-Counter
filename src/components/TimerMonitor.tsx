import React, {useState} from 'react';
import '../App.css';
import styles from './Timer.module.css'

type TimerPropsType = {
    timer: number
    maxValue: number
}

export const TimerMonitor = (props: TimerPropsType) => {

    let timerMonitorStopStyle = `${props.timer === props.maxValue && styles.timerMonitorStop}`;

    return (
        <div className={`${styles.timerMonitor} ${timerMonitorStopStyle}`}>
            {props.timer}
        </div>
    );
}