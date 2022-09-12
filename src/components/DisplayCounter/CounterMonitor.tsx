import React from 'react';
import '../../App.css';
import stylesMain from '../Counter/Counter.module.css'
import stylesDisplay from './DisplayCounter.module.css'

type CounterMonitorPropsType = {
    counter: number
    maxValue: number
    error: string | null
    setError: (errorValue: string) => void
}

export const CounterMonitor: React.FC<CounterMonitorPropsType> = (props) => {

    let counterMonitorStopStyle = `${props.counter === props.maxValue && stylesDisplay.counterMonitorStop}`;

    return (
        <div className={`${stylesMain.counterMonitor} ${counterMonitorStopStyle}`}>
            { props.error
                ? <div className={stylesDisplay.counterMonitorStopError}>{props.error}</div>
                : props.counter
            }
        </div>
    );
}