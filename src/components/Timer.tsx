import React, {useState} from 'react';
import '../App.css';
import styles from './Timer.module.css'
import {TimerMonitor} from "./TimerMonitor";
import {TimerControl} from "./TimerControl";

export const Timer = () => {

    const [timer, setTimer] = useState<number>(0);

    const minValue = 0;
    const maxValue = 5;

    const IncreaseTimer = () => {
        let newTimer = timer + 1;
        setTimer(newTimer);
    }

    const ResetTimer = () => {
        setTimer(0);
    }

    return (
        <div className={styles.timer}>
            <TimerMonitor timer={timer}
                          maxValue={maxValue}/>
            <TimerControl timer={timer}
                          increase={IncreaseTimer}
                          reset={ResetTimer}
                          minValue={minValue}
                          maxValue={maxValue}/>
        </div>
    );
}