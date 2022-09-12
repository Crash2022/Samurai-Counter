import React, {useEffect, useState} from 'react';
import '../../App.css';
import styles from './Counter.module.css'
import {CounterMonitor} from "./CounterMonitor";
import {CounterControl} from "./CounterControl";

export const Counter = () => {

    /*const setLocalStorage = () => {
        localStorage.setItem('countValue', JSON.stringify(counter))
    }
    const getLocalStorage = () => {
        let localValue = localStorage.getItem('countValue')
        if (localValue) {
            let newLocalValue = JSON.parse(localValue)
            setCounter(newLocalValue)
        }
    }*/

    const [counter, setCounter] = useState<number>(0);

    useEffect(()=>{
        let localValue = localStorage.getItem('countValue')
        if (localValue) {
            let newLocalValue = JSON.parse(localValue);
            setCounter(newLocalValue);
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('countValue', JSON.stringify(counter));
    }, [counter])

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