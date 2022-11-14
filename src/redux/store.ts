import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localStorage";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>;
// на всякий случай можно сделать типизацию store
export type AppStoreType = typeof store;

/*--------------------------------------------------------------------*/

// localStorage для Redux (лучше вынести в отдельный файл)

// можно вынести в отдельную переменную
// const persistedState = loadState();

// let preloadedState;
// const persistedTodosString = localStorage.getItem('counter-state');
// if (persistedTodosString) {
//     preloadedState = JSON.parse(persistedTodosString);
// }

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk));

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

// store.subscribe(() => {
//     localStorage.setItem('counter-state', JSON.stringify(store.getState()));
//     // можно выводить отдельное свойство объекта
//     // localStorage.setItem('counterValue', JSON.stringify(store.getState().counter.counter));
// });

/*--------------------------------------------------------------------*/

// @ts-ignore
window.store = store;