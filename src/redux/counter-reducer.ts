
const initialState = 0;

// export type CounterStateType = {
//     counter: number
// }

export type CounterActionsType = IncreaseACType | ResetACType;

export type IncreaseACType = ReturnType<typeof increaseCounterAC>;
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const increaseCounterAC = (counter: number) => ({
    type: INCREASE_COUNTER,
    counter
} as const);

export type ResetACType = ReturnType<typeof resetCounterAC>;
export const RESET_COUNTER = 'RESET_COUNTER';
export const resetCounterAC = (counter: number) => ({
    type: RESET_COUNTER,
    counter
} as const);

export const counterReducer = (state: number = initialState, action: CounterActionsType): number => {
    switch(action.type) {
        case INCREASE_COUNTER:
            //let newCount = state + action.counter;
            return state + action.counter;
        case RESET_COUNTER:
            return state = 0;
        default:
            return state;
    }
}