import React, {ChangeEvent} from 'react';
import '../../App.css';
import stylesMain from '../Counter/Counter.module.css'
import stylesSet from "./SettingsCounter.module.css";
import stylesDisplay from "../DisplayCounter/DisplayCounter.module.css";
import {Button} from "../../UI/Button";

export type SettingsCounterPropsType = {
    counter: number
    startValue: number
    setInputStartValue: (startValue: number) => void
    maxValue: number
    setInputMaxValue: (startValue: number) => void
    pushValue: () => void
    error: string | null
    setError: (errorValue: string) => void
    isSetting: boolean
    setIsSetting: (isSetting: boolean) => void
}

export const SettingsCounter: React.FC<SettingsCounterPropsType> = (props) => {

    const onClickHandlerSet = () => {
        props.pushValue();
    }

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

    return (
        <div className={stylesMain.displayCounter}>

            {/*<SettingsMonitor counter={props.counter}
                             startValue={props.startValue}
                             maxValue={props.maxValue}
            />
            <SettingsControl pushValue={props.pushValue}/>*/}

            <div className={stylesMain.counterMonitor}>
                <div className={stylesSet.settingsMonitor}>

                    <div className={stylesSet.setMonitorValues}>
                        <div className={stylesSet.valueTitle}>
                            Макс. значение
                        </div>
                        <div className={stylesSet.valueNumber}>
                            <input type="number"
                                   step={1}
                                   //min={0}
                                   //placeholder={'Введите число'}
                                   value={props.maxValue}
                                   onChange={onChangeClickHandlerMax}
                                   className={`${inputErrorStyle} ${inputErrorMaxStyle}`}
                            />
                        </div>
                    </div>
                    <div className={stylesSet.setMonitorValues}>
                        <div className={stylesSet.valueTitle}>
                            Начальное значение
                        </div>
                        <div className={stylesSet.valueNumber}>
                            <input type="number"
                                   step={1}
                                   //min={0}
                                   //placeholder={'Введите число'}
                                   value={props.startValue}
                                   onChange={onChangeClickHandlerStart}
                                   className={`${inputErrorStyle} ${inputErrorStartStyle}`}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className={stylesDisplay.counterControl}>
                <div className={stylesSet.set}>
                    <Button name={'Установить'}
                            callback={onClickHandlerSet}
                            disabled={!props.isSetting
                                || props.startValue === props.maxValue
                                || props.startValue < 0
                                || props.maxValue < 0
                            }
                    />
                </div>
            </div>

        </div>
    );
}