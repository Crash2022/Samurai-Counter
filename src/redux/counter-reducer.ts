import {CounterActionsType} from "./store";

export type InitialStateType ={
    counter: number
    isSetting: boolean
}

export const initialState: InitialStateType = {
    counter: 0,
    isSetting: true
}

export type IncreaseACType = ReturnType<typeof increaseCounterAC>;
export const increaseCounterAC = (counter: number) => ({
    type: 'INCREASE_COUNTER',
    counter
} as const);

export type ResetACType = ReturnType<typeof resetCounterAC>;
export const resetCounterAC = () => ({
    type: 'RESET_COUNTER'
} as const);

export type SetCounterACType = ReturnType<typeof setCounterAC>;
export const setCounterAC = (isSetting: boolean) => ({
    type: 'SET_COUNTER', isSetting
} as const);

export type SetMinValueACType = ReturnType<typeof setMinValueAC>;
export const setMinValueAC = () => ({
    type: 'SET_MIN_VALUE'
} as const);

export type SetMaxValueACType = ReturnType<typeof setMaxValueAC>;
export const setMaxValueAC = () => ({
    type: 'SET_MAX_VALUE'
} as const);

export const counterReducer = (state: InitialStateType = initialState, action: CounterActionsType): InitialStateType => {
    switch(action.type) {
        case 'INCREASE_COUNTER':
            return {...state, counter: state.counter+1};
        case 'RESET_COUNTER':
            return {...state, counter: 0};
        case 'SET_COUNTER':
            return {...state, isSetting: action.isSetting};
        case 'SET_MIN_VALUE':
            return state;
        case 'SET_MAX_VALUE':
            return state;
        default:
            return state;
    }
}