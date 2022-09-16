import React from 'react';
import '../../../App.css';
import styles from '../DisplayCounter/DisplayCounter.module.css'
import stylesSet from './SettingsCounter.module.css'
import {Button} from "../../../UI/Button";

export type SettingsControlPropsType = {
    pushValue: () => void
}

export const SettingsControl: React.FC<SettingsControlPropsType> = (props) => {

    const onClickHandlerSet = () => {
        //console.log('working')
        props.pushValue()
    }

    return (
        <div className={styles.counterControl}>
            <div className={stylesSet.set}>
                <Button name={'Установить'}
                        callback={onClickHandlerSet}
                />
            </div>
        </div>
    );
}