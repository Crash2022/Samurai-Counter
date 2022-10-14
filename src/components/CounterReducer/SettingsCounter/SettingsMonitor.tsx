import React, {ChangeEvent} from 'react';
import '../../../App.css';
import stylesMain from '../../../styles/Counter.module.css'
import stylesSet from '../../../styles/SettingsCounter.module.css'

export type SettingsMonitorPropsType = {
    counter: number
    startValue: number
    setInputStartValue: (startValue: number) => void
    maxValue: number
    setInputMaxValue: (startValue: number) => void
    setIsSetting: (isSetting: boolean) => void
}

export const SettingsMonitor: React.FC<SettingsMonitorPropsType> = (props) => {

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

    return (
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
                        Начальное значение
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
    );
}