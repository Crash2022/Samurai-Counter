
const initialState: number = 0;

export type CounterActionsType = IncreaseACType | ResetACType;

export type IncreaseACType = ReturnType<typeof increaseCounterAC>;
export const increaseCounterAC = (counter: number) => ({
    type: 'INCREASE_COUNTER',
    counter
} as const);

export type ResetACType = ReturnType<typeof resetCounterAC>;
export const resetCounterAC = () => ({
    type: 'RESET_COUNTER'
} as const);

export const counterReducer = (state: number = initialState, action: CounterActionsType): number => {
    switch(action.type) {
        case 'INCREASE_COUNTER':
            //let newCount = state + action.counter;
            return state + action.counter;
        case 'RESET_COUNTER':
            return state = 0;
        default:
            return state;
    }
}