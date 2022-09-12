import React from 'react';
import '../App.css';
import styles from './Timer.module.css'
import {Button} from "./Button";

type TimerControlPropsType = {
    timer: number
    increase: () => void
    reset: () => void
    minValue: number
    maxValue: number
}

export const TimerControl = (props: TimerControlPropsType) => {

    const onClickHandlerStart = () => {
        props.increase();
    }

    const onClickHandlerReset = () => {
        props.reset();
    }

    return (
        <div className={styles.timerControl}>
            <div className={styles.increase}>
                {/*<button onClick={onClickHandlerStart}
                        disabled={props.timer === 5 ? true : false}>increase</button>*/}
                <Button name={'increase'}
                        callback={onClickHandlerStart}
                        disabled={props.timer === props.maxValue}
                />
            </div>
            <div className={styles.reset}>
                {/*<button onClick={onClickHandlerReset}
                disabled={props.timer === 0 ? true : false}>reset</button>*/}
                <Button name={'reset'}
                        callback={onClickHandlerReset}
                        disabled={props.timer === props.minValue}
                />
            </div>
        </div>
    );
}