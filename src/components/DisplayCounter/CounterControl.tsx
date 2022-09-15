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
    disabled: boolean
    setDisabled: (buttonValue: boolean) => void
}

export const CounterControl: React.FC<CounterControlPropsType> = (props) => {

    const onClickHandlerStart = () => {
        props.increase();
    }

    const onClickHandlerReset = () => {
        props.reset();
    }

    return (
        <div className={stylesDisplay.counterControl}>
            <div className={stylesDisplay.increase}>
                <Button name={'Увеличить'}
                        callback={onClickHandlerStart}
                        disabled={props.disabled}
                />
            </div>
            <div className={stylesDisplay.reset}>
                <Button name={'Сбросить'}
                        callback={onClickHandlerReset}
                        disabled={props.disabled}
                />
            </div>
        </div>
    );
}