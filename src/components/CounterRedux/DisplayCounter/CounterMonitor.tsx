import React from 'react';
import '../../../App.css';
import stylesMain from '../../../styles/Counter.module.css'
import stylesDisplay from '../../../styles/DisplayCounter.module.css'

type CounterMonitorPropsType = {
    counter: number
    startValue: number
    maxValue: number
    error: string | null
    messageStart: string
}

export const CounterMonitor: React.FC<CounterMonitorPropsType> = (props) => {

    const isInfo = props.error === props.messageStart;

    let counterMonitorStopStyle = `${ props.counter === props.maxValue ? stylesDisplay.counterMonitorStop : '' }`;
    let startValueMaxStopStyle = `${ props.error && !isInfo ? stylesMain.counterMonitorStopError : '' }`;
    let startValueTitleStyle = `${ isInfo ? stylesMain.counterMonitorStartTitle : '' }`;

    return (
        <div className={`
                         ${stylesMain.counterMonitor} 
                         ${counterMonitorStopStyle} 
                         ${startValueMaxStopStyle}
                         ${startValueTitleStyle}
                       `}
        >
            { props.error ? props.error : props.counter }
        </div>
    );
}