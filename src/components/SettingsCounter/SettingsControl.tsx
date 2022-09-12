import React from 'react';
import '../../App.css';
import styles from '../DisplayCounter/DisplayCounter.module.css'
import stylesSet from './SettingsCounter.module.css'
import {Button} from "../../UI/Button";

export const SettingsControl = () => {

    const onClickHandlerSet = () => {
        console.log('working')
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