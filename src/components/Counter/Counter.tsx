import React, {useState} from 'react';
import '../../App.css';
import styles from './Counter.module.css'
import {CounterMonitor} from "./CounterMonitor";
import {CounterControl} from "./CounterControl";

export const Counter = () => {

    const [counter, setCounter] = useState<number>(0);

    const START_VALUE = 0;
    const MAX_VALUE = 5;

    const IncreaseTimer = () => {
        let newCount = counter + 1;
        setCounter(newCount);
    }

    const ResetTimer = () => {
        setCounter(0);
    }

    return (
        <div className={styles.counter}>
            <CounterMonitor counter={counter}
                            maxValue={MAX_VALUE}/>
            <CounterControl counter={counter}
                            increase={IncreaseTimer}
                            reset={ResetTimer}
                            startValue={START_VALUE}
                            maxValue={MAX_VALUE}/>
        </div>
    );
}