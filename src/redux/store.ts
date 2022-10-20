import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
//import {throttle} from "lodash";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

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
