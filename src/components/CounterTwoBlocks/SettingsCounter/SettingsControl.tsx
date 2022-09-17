import React from 'react';
import '../../../App.css';
import stylesSet from '../../../styles/SettingsCounter.module.css'
import {Button} from "../../../UI/Button";
import stylesDisplay from "../../../styles/DisplayCounter.module.css";

export type SettingsControlPropsType = {
    pushValue: () => void
    startValue: number
    maxValue: number
    isSetting: boolean
}

export const SettingsControl: React.FC<SettingsControlPropsType> = (props) => {

    const onClickHandlerSet = () => {
        props.pushValue()
    }

    return (
        <div className={stylesDisplay.counterControl}>
            <div className={stylesSet.set}>
                <Button name={'Установить'}
                        callback={onClickHandlerSet}
                        disabled={!props.isSetting
                            || props.startValue === props.maxValue
                            || props.startValue > props.maxValue
                            || props.startValue < 0
                            || props.maxValue < 0
                        }
                />
            </div>
        </div>
    );
}