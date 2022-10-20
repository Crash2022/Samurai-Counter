export type CounterActionsType =
    IncreaseACType |
    ResetACType |
    SetCounterACType |
    SetMinValueACType |
    SetMaxValueACType |
    SetErrorACType |
    PushValueACType;

// export type InitialStateType = {
//     counter: number
//     maxValue: number
//     startValue: number
//     //reset: number
//     isSetting: boolean
//     errorMessage: string
// }

const errorMessages = {
    //MESSAGE_START: 'Введите значения и нажмите кнопку установить',
    //MESSAGE_START_NULL: '',
    MESSAGE_ZERO: 'Значение должно быть больше 0!',
    MESSAGE_START_LESS_MAX: 'Начальное значение должно быть меньше максимального!',
    MESSAGE_START_NOT_MAX: 'Начальное значение не должно равняться максимальному!',
    MESSAGE_VALUE_NOT_INTEGER: 'Значение должно быть целым числом!'
}

export type InitialStateType = typeof initialState
export const initialState = {
    counter: 0,
    maxValue: 0,
    startValue: 0,
    //reset: 0,
    isSetting: true,
    errorMessage: ''
}

export const counterReducer = (state = initialState,
                               action: CounterActionsType): InitialStateType => {
    switch(action.type) {
        case 'INCREASE_COUNTER':
            // code here
            return {...state,
                counter: state.counter+1};
        case 'RESET_COUNTER':
            return {...state, counter: action.startValue};
        case 'SET_COUNTER':
            return {...state, isSetting: action.isSetting};
        case 'SET_MAX_VALUE':
            return {...state, maxValue: action.maxValue};
        case 'SET_START_VALUE':
            return {...state, startValue: action.startValue};
        /*case 'SET_ERROR':
            return {...state, startMessage: action.error};*/
        case 'PUSH_VALUE':
            return {...state, isSetting: action.isSetting, counter: action.startValue,
                startValue: action.startValue, maxValue: action.maxValue};
        default:
            return state;
    }
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

export type SetErrorACType = ReturnType<typeof setErrorAC>;
export const setErrorAC = (error: string) => ({
    type: 'SET_ERROR', error
} as const);

export type PushValueACType = ReturnType<typeof pushValueAC>;
export const pushValueAC = (isSetting: boolean, counter: number,
                            startValue: number, maxValue: number) => ({
    type: 'PUSH_VALUE',
    isSetting, counter, startValue, maxValue
} as const);