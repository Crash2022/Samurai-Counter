import React from 'react';
import '../../App.css';
import stylesMain from '../Counter/Counter.module.css'
import stylesDisplay from './DisplayCounter.module.css'

type CounterMonitorPropsType = {
    counter: number
    startValue: number
    maxValue: number
    error: string | null
    setError: (errorValue: string) => void
}

export const CounterMonitor: React.FC<CounterMonitorPropsType> = (props) => {

    let counterMonitorStopStyle = `${props.counter === props.maxValue && stylesDisplay.counterMonitorStop}`;
    let startValueMaxStopStyle = `${props.error && stylesMain.counterMonitorStopError}`;
    let startValueTitleStyle = `${props.error === 'Введите значения и нажмите кнопку установить' && stylesMain.counterMonitorStartTitle}`;

    return (
        <div className={`
                         ${stylesMain.counterMonitor} 
                         ${counterMonitorStopStyle} 
                         ${startValueMaxStopStyle}
                         ${startValueTitleStyle}
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