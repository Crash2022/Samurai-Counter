import {Dispatch} from "redux";
import {AppRootStateType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export type CounterActionsType =
    IncreaseACType |
    ResetACType |
    SetCounterACType |
    SetMinValueACType |
    SetMaxValueACType |
    SetErrorACType |
    PushValueACType |
    SetValueFromLocalStorageACType;

export const errorMessages = {
    //MESSAGE_START: 'Введите значения и нажмите кнопку установить',
    MESSAGE_START_NULL: '',
    MESSAGE_ZERO: 'Значение должно быть больше 0!',
    MESSAGE_START_LESS_MAX: 'Начальное значение должно быть меньше максимального!',
    MESSAGE_START_NOT_MAX: 'Начальное значение не должно равняться максимальному!',
    MESSAGE_VALUE_NOT_INTEGER: 'Значение должно быть целым числом!'
}

// export type InitialStateType = {
//     counter: number
//     maxValue: number
//     startValue: number
//     isSetting: boolean
//     errorMessage: string
// }

export type InitialStateType = typeof initialState;
export const initialState = {
    counter: 0,
    maxValue: 0,
    startValue: 0,
    isSetting: true,
    errorMessage: ''
}

export const counterReducer = (state = initialState,
                               action: CounterActionsType): InitialStateType => {
    switch(action.type) {
        case 'INCREASE_COUNTER':
            return {...state, counter: state.counter+1};
        case 'RESET_COUNTER':
            return {...state, counter: action.startValue};
        case 'SET_COUNTER':
            return {...state, isSetting: action.isSetting};
        case 'SET_MAX_VALUE':
            return {...state, maxValue: action.maxValue};
        case 'SET_START_VALUE':
            return {...state, startValue: action.startValue};
        case 'SET_ERROR': {

            const stateCopy = {...state}

            if (state.startValue > state.maxValue) {
                stateCopy.errorMessage = errorMessages.MESSAGE_START_LESS_MAX;
            } else {
                stateCopy.errorMessage = errorMessages.MESSAGE_START_NULL;
            }
            if (stateCopy.startValue === state.maxValue) {
                stateCopy.errorMessage = errorMessages.MESSAGE_START_NOT_MAX;
            }
            if (stateCopy.startValue < 0) {
                stateCopy.errorMessage = errorMessages.MESSAGE_ZERO;
            }
            if (stateCopy.maxValue < 0) {
                stateCopy.errorMessage = errorMessages.MESSAGE_ZERO;
            }
            if (!Number.isInteger(state.maxValue)) {
                stateCopy.errorMessage = errorMessages.MESSAGE_VALUE_NOT_INTEGER;
            }
            if (!Number.isInteger(state.startValue)) {
                stateCopy.errorMessage = errorMessages.MESSAGE_VALUE_NOT_INTEGER;
            }

            return stateCopy;
        }
        case 'PUSH_VALUE': {

            const stateCopy = {...state}

            if (state.startValue > state.maxValue) {
                stateCopy.errorMessage = errorMessages.MESSAGE_START_LESS_MAX;
            } else {
                stateCopy.errorMessage = errorMessages.MESSAGE_START_NULL;
            }

            return {
                ...stateCopy, isSetting: action.isSetting, counter: action.startValue,
                startValue: action.startValue, maxValue: action.maxValue
            };
        }
        case 'SET_VALUE_FROM_LOCAL_STORAGE':
            return {...state, counter: action.counter};
        default:
            return state;
    }
}

/*------------------------------ACTIONS------------------------------*/

export type IncreaseACType = ReturnType<typeof increaseCounterAC>;
export const increaseCounterAC = (/*counter: number*/) => ({
    type: 'INCREASE_COUNTER'/*, counter*/
} as const);

export type ResetACType = ReturnType<typeof resetCounterAC>;
export const resetCounterAC = (startValue: number) => ({
    type: 'RESET_COUNTER', startValue
} as const);

export type SetCounterACType = ReturnType<typeof setCounterAC>;
export const setCounterAC = (isSetting: boolean) => ({
    type: 'SET_COUNTER', isSetting
} as const);

export type SetMaxValueACType = ReturnType<typeof setMaxValueAC>;
export const setMaxValueAC = (maxValue: number) => ({
    type: 'SET_MAX_VALUE', maxValue
} as const);

export type SetMinValueACType = ReturnType<typeof setStartValueAC>;
export const setStartValueAC = (startValue: number) => ({
    type: 'SET_START_VALUE', startValue
} as const);

export type SetErrorACType = ReturnType<typeof setErrorAC>;
export const setErrorAC = () => ({
    type: 'SET_ERROR'
} as const);

export type PushValueACType = ReturnType<typeof pushValueAC>;
export const pushValueAC = (isSetting: boolean, counter: number,
                            startValue: number, maxValue: number) => ({
    type: 'PUSH_VALUE',
    isSetting, counter, startValue, maxValue
} as const);

export type SetValueFromLocalStorageACType = ReturnType<typeof setValueFromLocalStorageAC>;
export const setValueFromLocalStorageAC = (counter: number) => ({
    type: 'SET_VALUE_FROM_LOCAL_STORAGE', counter
} as const);

/*------------------------------THUNK------------------------------*/

// export const increaseCounterTC: ThunkAction<void, AppRootStateType, { }, CounterActionsType> = (counterValue: number) => {
//     return (dispatch: ThunkDispatch<AppRootStateType, unknown, CounterActionsType> /*, getState: () => AppRootStateType*/) => {
//         //let currentValue = getState().counter.counter;
//         localStorage.setItem('counterValue', JSON.stringify(counterValue));
//         dispatch(increaseCounterAC());
//     }
// }
//
// export const setValueFromLocalStorageTC: ThunkAction<void, AppRootStateType, { }, CounterActionsType> = () => {
//     return (dispatch: ThunkDispatch<AppRootStateType, unknown, CounterActionsType>) => {
//         let localCounterValue = localStorage.getItem('counterValue')
//             if (localCounterValue) {
//                 let newLocalCounterValue = JSON.parse(localCounterValue);
//                 dispatch(setValueFromLocalStorageAC(newLocalCounterValue));
//             }
//     }
// }