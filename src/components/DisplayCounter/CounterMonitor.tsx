import React from 'react';
import '../../App.css';
import stylesMain from '../Counter/Counter.module.css'
import stylesDisplay from './DisplayCounter.module.css'

type CounterMonitorPropsType = {
    counter: number
    maxValue: number
}

export const CounterMonitor: React.FC<CounterMonitorPropsType> = (props) => {

    let counterMonitorStopStyle = `${props.counter === props.maxValue && stylesDisplay.counterMonitorStop}`;

    return (
        <div className={`${stylesMain.counterMonitor} ${counterMonitorStopStyle}`}>
            {props.counter}
        </div>
    );
}