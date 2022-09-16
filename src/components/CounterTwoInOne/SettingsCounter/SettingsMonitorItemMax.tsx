import React, {ChangeEvent} from 'react';
import '../../../App.css';
import stylesSet from '../../../styles/SettingsCounter.module.css'

export type MonitorSetItemMaxPropsType = {
    title: string
    counter: number
    maxValue: (startValue: number) => void
}

export const SettingsMonitorItemMax: React.FC<MonitorSetItemMaxPropsType> = (props) => {

    const onChangeClickHandler = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log('max');
        props.maxValue(+event.currentTarget.value);
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
                       placeholder={'Введите число'}
                       onChange={onChangeClickHandler}
                />
            </div>
        </div>
    );
}