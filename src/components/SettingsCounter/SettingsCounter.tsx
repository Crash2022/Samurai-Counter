import React, {ChangeEvent} from 'react';
import '../../App.css';
import stylesMain from '../Counter/Counter.module.css'
import stylesSet from "./SettingsCounter.module.css";
import styles from "../DisplayCounter/DisplayCounter.module.css";
import {Button} from "../../UI/Button";
//import {SettingsMonitorItemMax} from "./SettingsMonitorItemMax";
//import {SettingsMonitorItemStart} from "./SettingsMonitorItemStart";
//import {SettingsMonitor} from "./SettingsMonitor";
//import {SettingsControl} from "./SettingsControl";

export type SettingsCounterPropsType = {
    counter: number
    startValue: number
    setInputStartValue: (startValue: number) => void
    maxValue: number
    setInputMaxValue: (startValue: number) => void
    pushValue: () => void
    error: string | null
    setError: (errorValue: string) => void
}

export const SettingsCounter: React.FC<SettingsCounterPropsType> = (props) => {

    const onClickHandlerSet = () => {
        //console.log('working')
        props.pushValue();
    }

    const onChangeClickHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log('max');
        props.setInputMaxValue(+event.currentTarget.value);
    }

    const onChangeClickHandlerStart = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.currentTarget.value);

        if (props.startValue > props.maxValue) {
            props.setError('Начальное значение должно быть меньше максимального');
        } else {
            props.setInputStartValue(+event.currentTarget.value);
        }
    }

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
                                   min={0}
                                   placeholder={'Введите число'}
                                   value={props.maxValue}
                                   onChange={onChangeClickHandlerMax}
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
                                   min={0}
                                   placeholder={'Введите число'}
                                   value={props.startValue}
                                   onChange={onChangeClickHandlerStart}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.counterControl}>
                <div className={stylesSet.set}>
                    <Button name={'Установить'}
                            callback={onClickHandlerSet}
                    />
                </div>
            </div>

        </div>
    );
}