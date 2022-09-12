import React, {useState} from 'react';
import '../../App.css';
import styles from '../Counter/Counter.module.css'

export type MonitorSetItemPropsType = {
    title: string
}

export const SettingsMonitorItem: React.FC<MonitorSetItemPropsType> = ({title}) => {

    return (
        <div className={styles.setMonitorValues}>
            <div className={styles.valueTitle}>
                {title}
            </div>
            <div className={styles.valueNumber}>
                <input type="number" step={1}/>
            </div>
        </div>
    );
}