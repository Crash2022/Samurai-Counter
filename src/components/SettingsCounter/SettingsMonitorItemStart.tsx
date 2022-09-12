import React, {ChangeEvent} from 'react';
import '../../App.css';
import stylesSet from './SettingsCounter.module.css'

export type MonitorSetItemStartPropsType = {
    title: string
    counter: number
    startValue: (startValue: number) => void
}

export const SettingsMonitorItemStart: React.FC<MonitorSetItemStartPropsType> = (props) => {

    const onChangeClickHandler = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.currentTarget.value);
        props.startValue(+event.currentTarget.value);
    }

    return (
        <div className={stylesSet.setMonitorValues}>
            <div className={stylesSet.valueTitle}>
                {props.title}
            </div>
            <div className={stylesSet.valueNumber}>
                <input type="number"
                       step={1}
                       min={0}
                       /*min={props.startValue}
                       max={props.maxValue}*/
                       placeholder={'Введите число'}
                       onChange={onChangeClickHandler}/>
            </div>
        </div>
    );
}