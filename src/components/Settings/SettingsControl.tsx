import React from 'react';
import '../../App.css';
import styles from '../Counter/Counter.module.css'
import {Button} from "../../UI/Button";


export const SettingsControl = () => {

    const onClickHandlerSet = () => {
        console.log('working')
    }

    return (
        <div className={styles.counterControl}>
            <div className={styles.set}>
                <Button name={'set'}
                        callback={onClickHandlerSet}
                />
            </div>
        </div>
    );
}