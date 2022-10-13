import {counterReducer, increaseCounterAC, resetCounterAC} from "./counter-reducer";

test('counter should be increase', ()=> {

    const startState: number = 0;
    const action = increaseCounterAC(1);
    const endState = counterReducer(startState, action);

    expect(endState).toBe(1);
});

test('counter should be reset to 0', ()=> {

    const startState: number = 5;
    const action = resetCounterAC();
    const endState = counterReducer(startState, action);

    expect(endState).toBe(0);
});