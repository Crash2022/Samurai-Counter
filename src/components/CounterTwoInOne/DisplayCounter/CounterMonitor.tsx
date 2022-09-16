import React from 'react';
import '../../../App.css';
import stylesMain from '../../../styles/Counter.module.css'
import stylesDisplay from '../../../styles/DisplayCounter.module.css'

type CounterMonitorPropsType = {
    counter: number
    startValue: number
    maxValue: number
    error: string | null
    setError: (errorValue: string) => void
    startMessage: string
}

export const CounterMonitor: React.FC<CounterMonitorPropsType> = (props) => {

    const isInfo = props.error === props.startMessage;

    let counterMonitorStopStyle = `${ props.counter === props.maxValue ? stylesDisplay.counterMonitorStop : '' }`;
    let startValueMaxStopStyle = `${ props.error && !isInfo ? stylesMain.counterMonitorStopError : '' }`;
    let startValueTitleStyle = `${ isInfo ? stylesMain.counterMonitorStartTitle : '' }`;

    /*const getInfoMessage = () => {
        if (props.error) {
            return props.error
        }
        if (isInfo) {
            //props.info
           return  props.error
        }
        return props.counter
    }*/

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