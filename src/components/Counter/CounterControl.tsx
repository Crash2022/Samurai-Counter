import React from 'react';
import '../../App.css';
import styles from './Counter.module.css'
import {Button} from "../../UI/Button";

type TimerControlPropsType = {
    counter: number
    increase: () => void
    reset: () => void
    startValue: number
    maxValue: number
}

export const CounterControl = (props: TimerControlPropsType) => {

    const onClickHandlerStart = () => {
        props.increase();
    }

    const onClickHandlerReset = () => {
        props.reset();
    }

    return (
        <div className={styles.counterControl}>
            <div className={styles.increase}>
                {/*<button onClick={onClickHandlerStart}
                        disabled={props.timer === 5 ? true : false}>increase</button>*/}
                <Button name={'increase'}
                        callback={onClickHandlerStart}
                        disabled={props.counter === props.maxValue}
                />
            </div>
            <div className={styles.reset}>
                {/*<button onClick={onClickHandlerReset}
                disabled={props.timer === 0 ? true : false}>reset</button>*/}
                <Button name={'reset'}
                        callback={onClickHandlerReset}
                        disabled={props.counter === props.startValue}
                />
            </div>
        </div>
    );
}