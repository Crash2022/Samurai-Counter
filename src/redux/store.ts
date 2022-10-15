import {combineReducers, createStore} from "redux";
import {counterReducer,
    IncreaseACType, ResetACType,
    SetMaxValueACType, SetMinValueACType,
    SetCounterACType, PushValueACType} from "./counter-reducer";
//import {throttle} from "lodash";

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


// LocalStorage

// store.js
//import throttle from 'lodash.throttle';

/*const persistedState = loadState();
const store = createStore(
    app,
    persistedState
);
store.subscribe(throttle(() => {
    saveState({
    todos: store.getState().todos
  });
}, 1000));*/
