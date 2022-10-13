import {counterReducer, increaseCounterAC} from "./counter-reducer";

test('counter should be increase', ()=> {

    const startState: number = 0;

    const action = increaseCounterAC(1);

    const endState = counterReducer(startState, action);

    expect(endState).toBe(1);
});