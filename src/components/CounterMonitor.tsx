import React, {useState} from 'react';
import '../App.css';
import styles from './Timer.module.css'

type TimerPropsType = {
    counter: number
    maxValue: number
}

export const CounterMonitor = (props: TimerPropsType) => {

    let counterMonitorStopStyle = `${props.counter === props.maxValue && styles.counterMonitorStop}`;

    return (
        <div className={`${styles.counterMonitor} ${counterMonitorStopStyle}`}>
            {props.counter}
        </div>
    );
}