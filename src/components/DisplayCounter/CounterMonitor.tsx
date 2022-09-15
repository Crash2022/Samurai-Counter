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
    let startValueMaxStopStyle = `${props.error && stylesMain.counterMonitorStopError}`;

    return (
        <div className={`
                         ${stylesMain.counterMonitor} 
                         ${counterMonitorStopStyle} 
                         ${startValueMaxStopStyle}
                       `}
        >
            {
                props.error
                ? props.error
                : props.counter
            }
        </div>
    );
}