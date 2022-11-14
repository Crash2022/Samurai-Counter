import {counterReducer, increaseCounterAC, setCounterAC, resetCounterAC,
    InitialStateType} from "./counter-reducer";

let startState: InitialStateType;

beforeEach(() => {
    startState = {
        counter: 0,
        maxValue: 0,
        startValue: 0,
        isSetting: true,
        errorMessage: ''
    };
})

test('counter should be increase', ()=> {

    //const action = increaseCounterAC();
    const endState = counterReducer(startState, increaseCounterAC());

    expect(endState.counter).toBe(1);
});

test('counter should be reset to start value', ()=> {

    const action = resetCounterAC(1);
    const endState = counterReducer(startState, action);

    expect(endState.counter).toBe(1);
});

test('counter settings should be unSet', ()=> {

    const action = setCounterAC(false);
    const endState = counterReducer(startState, action);

    expect(endState.isSetting).toBeFalsy();
});