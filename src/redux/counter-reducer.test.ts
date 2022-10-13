import {counterReducer, increaseCounterAC, setCounterAC, resetCounterAC,
    InitialStateType} from "./counter-reducer";

test('counter should be increase', ()=> {

    const startState: InitialStateType = {
        counter: 0,
        maxValue: 0,
        startValue: 0,
        reset: 0,
        isSetting: true
    };

    const action = increaseCounterAC(0);
    const endState = counterReducer(startState, action);

    expect(endState.counter).toBe(1);
});

test('counter should be reset to 0', ()=> {

    const startState: InitialStateType = {
        counter: 5,
        maxValue: 0,
        startValue: 0,
        reset: 0,
        isSetting: true
    };

    const action = resetCounterAC(0);
    const endState = counterReducer(startState, action);

    expect(endState.counter).toBe(0);
});

test('counter settings should be unSet', ()=> {

    const startState: InitialStateType = {
        counter: 0,
        maxValue: 0,
        startValue: 0,
        reset: 0,
        isSetting: true
    };

    const action = setCounterAC(false);
    const endState = counterReducer(startState, action);

    expect(endState.isSetting).toBeFalsy();
});