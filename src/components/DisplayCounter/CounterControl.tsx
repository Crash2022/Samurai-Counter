import React from 'react';
import '../../App.css';
import stylesDisplay from './DisplayCounter.module.css'
import {Button} from "../../UI/Button";

type CounterControlPropsType = {
    counter: number
    increase: () => void
    reset: () => void
    startValue: number
    maxValue: number
    disableInc: boolean
    setDisableInc: (buttonValue: boolean) => void
    disableReset: boolean
    setDisableReset: (buttonValue: boolean) => void
}

export const CounterControl: React.FC<CounterControlPropsType> = (props) => {

    const onClickHandlerStart = () => {
        if (props.counter === props.maxValue) {
            props.setDisableInc(true);
        }

        props.increase();
    }

    const onClickHandlerReset = () => {
        if (props.counter === props.startValue) {
            props.setDisableInc(true);
        }
        props.reset();
    }

    return (
        <div className={stylesDisplay.counterControl}>
            <div className={stylesDisplay.increase}>
                <Button name={'Увеличить'}
                        callback={onClickHandlerStart}
                        disabled={props.counter === props.maxValue}
                />
            </div>
            <div className={stylesDisplay.reset}>
                <Button name={'Сбросить'}
                        callback={onClickHandlerReset}
                        disabled={props.counter === props.startValue}
                />
            </div>
        </div>
    );
}