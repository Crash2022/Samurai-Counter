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
                {/*<button onClick={onClickHandlerStart}
                        disabled={props.timer === 5 ? true : false}>increase</button>*/}
                <Button name={'Увеличить'}
                        callback={onClickHandlerStart}
                        disabled={props.counter === props.maxValue}
                />
            </div>
            <div className={stylesDisplay.reset}>
                {/*<button onClick={onClickHandlerReset}
                disabled={props.timer === 0 ? true : false}>reset</button>*/}
                <Button name={'Сбросить'}
                        callback={onClickHandlerReset}
                        disabled={props.counter === props.startValue}
                />
            </div>
        </div>
    );
}