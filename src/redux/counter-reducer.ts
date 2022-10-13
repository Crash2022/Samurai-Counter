import {CounterActionsType} from "./store";

export type InitialStateType = {
    counter: number
    maxValue: number
    startValue: number
    reset: number
    isSetting: boolean
}

export const initialState: InitialStateType = {
    counter: 0,
    maxValue: 0,
    startValue: 0,
    reset: 0,
    isSetting: true
}

export type IncreaseACType = ReturnType<typeof increaseCounterAC>;
export const increaseCounterAC = (counter: number) => ({
    type: 'INCREASE_COUNTER', counter
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

export const counterReducer = (state: InitialStateType = initialState, action: CounterActionsType):
    InitialStateType => {
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
        default:
            return state;
    }
}