import React from 'react';
import '../../App.css';
import stylesSet from './SettingsCounter.module.css'

export type MonitorSetItemPropsType = {
    title: string
}

export const SettingsMonitorItem: React.FC<MonitorSetItemPropsType> = ({title}) => {

    return (
        <div className={stylesSet.setMonitorValues}>
            <div className={stylesSet.valueTitle}>
                {title}
            </div>
            <div className={stylesSet.valueNumber}>
                <input type="number" step={1}/>
            </div>
        </div>
    );
}