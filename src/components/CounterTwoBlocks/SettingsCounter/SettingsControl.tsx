import React from 'react';
import '../../../App.css';
import styles from '../../../styles/DisplayCounter.module.css'
import stylesSet from '../../../styles/SettingsCounter.module.css'
import {Button} from "../../../UI/Button";

export type SettingsControlPropsType = {
    pushValue: () => void
}

export const SettingsControl: React.FC<SettingsControlPropsType> = (props) => {

    const onClickHandlerSet = () => {
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