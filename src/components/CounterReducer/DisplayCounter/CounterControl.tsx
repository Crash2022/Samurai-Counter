import React from 'react';
import '../../../App.css';
import stylesDisplay from '../../../styles/DisplayCounter.module.css'
import {Button} from "../../../UI/Button";

type CounterControlPropsType = {
    counter: number
    increase: () => void
    reset: () => void
    startValue: number
    maxValue: number
    isSetting:boolean
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
                        disabled={props.counter === props.maxValue || props.isSetting}
                />
            </div>
            <div className={stylesDisplay.reset}>
                <Button name={'Сбросить'}
                        callback={onClickHandlerReset}
                        disabled={props.counter === props.startValue || props.isSetting}
                />
            </div>
        </div>
    );
}