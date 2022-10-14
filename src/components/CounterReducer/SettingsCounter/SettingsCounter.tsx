import React, {ChangeEvent} from 'react';
import '../../../App.css';
//import {SettingsMonitor} from "./SettingsMonitor";
//import {SettingsControl} from "./SettingsControl";
import stylesMain from '../../../styles/Counter.module.css'
import stylesSet from "../../../styles/SettingsCounter.module.css";
import stylesDisplay from "../../../styles/DisplayCounter.module.css";
import {Button} from "../../../UI/Button";

export type SettingsCounterPropsType = {
    startValue: number
    setInputStartValue: (startValue: number) => void
    maxValue: number
    setInputMaxValue: (maxValue: number) => void
    pushValue: () => void
    isSetting: boolean
    setIsSetting: (isSetting: boolean) => void
}

export const SettingsCounter: React.FC<SettingsCounterPropsType> = (props) => {

    const onChangeClickHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
        props.setIsSetting(true);
        props.setInputMaxValue(+event.currentTarget.value);
    }

    const onChangeClickHandlerStart = (event: ChangeEvent<HTMLInputElement>) => {
        props.setIsSetting(true);
        props.setInputStartValue(+event.currentTarget.value);
    }

    let inputErrorStyle = `${props.startValue === props.maxValue && stylesSet.settings}`;
    let inputErrorMaxStyle = `${props.maxValue < 0 && stylesSet.settings}`;
    let inputErrorStartStyle = `${props.startValue < 0 && stylesSet.settings}`;
    let inputErrorStarBiggerMaxStyle = `${props.startValue > props.maxValue && stylesSet.settings}`;
    let inputErrorMaxNotIntegerStyle = `${!Number.isInteger(props.maxValue) && stylesSet.settings}`;
    let inputErrorStartNotIntegerStyle = `${!Number.isInteger(props.startValue) && stylesSet.settings}`;

    /*----------------------------------------------------------------------------*/

    const onClickHandlerSet = () => {
        props.pushValue()
    }

    /*----------------------------------------------------------------------------*/

    return (
        <div className={stylesMain.displayCounter}>
            {/*<SettingsMonitor counter={props.counter}
                             startValue={props.startValue}
                             setInputStartValue={props.setInputStartValue}
                             maxValue={props.maxValue}
                             setInputMaxValue={props.setInputMaxValue}
                             setIsSetting={props.setIsSetting}
            />*/}

            <div className={stylesMain.counterMonitor}>
                <div className={stylesSet.settingsMonitor}>

                    <div className={stylesSet.setMonitorValues}>
                        <div className={stylesSet.valueTitle}>
                            <span>Макс. значение</span>
                        </div>
                        <div className={stylesSet.valueNumber}>
                            <input type="number"
                                   step={1}
                                //min={0}
                                //placeholder={'Введите число'}
                                   value={props.maxValue}
                                   onChange={onChangeClickHandlerMax}
                                   className={`
                                        ${inputErrorStyle} 
                                        ${inputErrorMaxStyle} 
                                        ${inputErrorMaxNotIntegerStyle}
                               `}
                            />
                        </div>
                    </div>

                    <div className={stylesSet.setMonitorValues}>
                        <div className={stylesSet.valueTitle}>
                            <span>Начальное значение</span>
                        </div>
                        <div className={stylesSet.valueNumber}>
                            <input type="number"
                                   step={1}
                                //min={0}
                                //placeholder={'Введите число'}
                                   value={props.startValue}
                                   onChange={onChangeClickHandlerStart}
                                   className={`
                                        ${inputErrorStyle} 
                                        ${inputErrorStartStyle} 
                                        ${inputErrorStarBiggerMaxStyle}
                                        ${inputErrorStartNotIntegerStyle}
                               `}
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/*<SettingsControl pushValue={props.pushValue}
                             startValue={props.startValue}
                             maxValue={props.maxValue}
                             isSetting={props.isSetting}
            />*/}

            <div className={stylesDisplay.counterControl}>
                <div className={stylesSet.set}>
                    <Button name={'Установить'}
                            callback={onClickHandlerSet}
                            disabled={!props.isSetting
                                || props.startValue === props.maxValue
                                || props.startValue > props.maxValue
                                || props.startValue < 0
                                || props.maxValue < 0
                                || !Number.isInteger(props.maxValue)
                                || !Number.isInteger(props.startValue)
                            }
                    />
                </div>
            </div>

        </div>
    );
}