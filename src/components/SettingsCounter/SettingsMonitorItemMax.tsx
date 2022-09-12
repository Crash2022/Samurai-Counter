import React from 'react';
import '../../App.css';
import stylesSet from './SettingsCounter.module.css'

export type MonitorSetItemPropsType = {
    title: string
}

export const SettingsMonitorItemMax: React.FC<MonitorSetItemPropsType> = ({title}) => {

    return (
        <div className={stylesSet.setMonitorValues}>
            <div className={stylesSet.valueTitle}>
                {title}
            </div>
            <div className={stylesSet.valueNumber}>
                <input type="number"
                       step={1}
                       placeholder={'Выберите число'}
                       onChange={(event)=>console.log(event.currentTarget.value)}/>
            </div>
        </div>
    );
}