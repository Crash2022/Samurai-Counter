
const initialState = {
    counter: 0
}

export type CounterStateType = {
    counter: number
}
export type CounterActionsType = CounterACType;


export type CounterACType = ReturnType<typeof counterAC>;
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const counterAC = (counter: number) => ({
    type: INCREASE_COUNTER,
    counter
} as const);

export const counterReducer = (state: CounterStateType = initialState, action: CounterActionsType): CounterStateType => {
    switch(action.type) {
        case INCREASE_COUNTER:
            return {...state, action.counter+1};
    }
}