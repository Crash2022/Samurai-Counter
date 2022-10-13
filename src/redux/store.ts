import {combineReducers, createStore} from "redux";
import {counterReducer,
    IncreaseACType, ResetACType,
    SetMaxValueACType, SetMinValueACType,
    SetCounterACType, PushValueACType} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

export type CounterActionsType =
    IncreaseACType |
    ResetACType |
    SetCounterACType |
    SetMinValueACType |
    SetMaxValueACType |
    PushValueACType;

// @ts-ignore
window.store = store;