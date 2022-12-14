import React, {ChangeEvent} from 'react';
import '../../../App.css';
import stylesMain from '../../../styles/Counter.module.css'
import stylesSet from "../../../styles/SettingsCounter.module.css";
import stylesDisplay from "../../../styles/DisplayCounter.module.css";
import {Button} from "../../../UI/Button";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../../redux/store";
import {InitialStateType,
    pushValueAC, setCounterAC, setErrorAC,
    setMaxValueAC, setStartValueAC} from "../../../redux/counter-reducer";

export const SettingsCounter = () => {

    const dispatch = useAppDispatch();
    const counter = useSelector<AppRootStateType, InitialStateType>( state => state.counter);

    const onChangeClickHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+event.currentTarget.value));
        dispatch(setCounterAC(true));
        dispatch(setErrorAC());
    }

    const onChangeClickHandlerStart = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(+event.currentTarget.value));
        dispatch(setCounterAC(true));
        dispatch(setErrorAC());
    }

    const onClickHandlerSetSetting = () => {
        dispatch(pushValueAC(false, counter.counter,
            counter.startValue, counter.maxValue));
        dispatch(setErrorAC());
    }

    /*----------------------------------------------------------------------------*/

    let inputErrorStyle = `${counter.startValue === counter.maxValue && stylesSet.settings}`;
    let inputErrorMaxStyle = `${counter.maxValue < 0 && stylesSet.settings}`;
    let inputErrorStartStyle = `${counter.startValue < 0 && stylesSet.settings}`;
    let inputErrorStarBiggerMaxStyle = `${counter.startValue > counter.maxValue && stylesSet.settings}`;
    let inputErrorMaxNotIntegerStyle = `${!Number.isInteger(counter.maxValue) && stylesSet.settings}`;
    let inputErrorStartNotIntegerStyle = `${!Number.isInteger(counter.startValue) && stylesSet.settings}`;

    /*----------------------------------------------------------------------------*/

    return (
        <div className={stylesMain.displayCounter}>

            <div className={stylesMain.counterMonitor}>
                <div className={stylesSet.settingsMonitor}>

                    <div className={stylesSet.setMonitorValues}>
                        <div className={stylesSet.valueTitle}>
                            <span>????????. ????????????????</span>
                        </div>
                        <div className={stylesSet.valueNumber}>
                            <input type="number"
                                   step={1}
                                //min={0}
                                //placeholder={'?????????????? ??????????'}
                                   value={counter.maxValue}
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
                            <span>?????????????????? ????????????????</span>
                        </div>
                        <div className={stylesSet.valueNumber}>
                            <input type="number"
                                   step={1}
                                //min={0}
                                //placeholder={'?????????????? ??????????'}
                                   value={counter.startValue}
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

            <div className={stylesDisplay.counterControl}>
                <div className={stylesSet.set}>
                    <Button name={'????????????????????'}
                            callback={onClickHandlerSetSetting}
                            disabled={!counter.isSetting
                                || counter.startValue === counter.maxValue
                                || counter.startValue > counter.maxValue
                                || counter.startValue < 0
                                || counter.maxValue < 0
                                || !Number.isInteger(counter.maxValue)
                                || !Number.isInteger(counter.startValue)
                            }
                    />
                </div>
            </div>

        </div>
    );
}