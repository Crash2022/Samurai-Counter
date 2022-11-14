import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {CounterActionsType, counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localStorage";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
    counter: counterReducer
})

/*--------------------------------------------------------------------*/

// localStorage для Redux (лучше вынести в отдельный файл)

// можно вынести в отдельную переменную
// const persistedState = loadState();

// let preloadedState;
// const persistedTodosString = localStorage.getItem('counter-state');
// if (persistedTodosString) {
//     preloadedState = JSON.parse(persistedTodosString);
// }

/*--------------------------------------------------------------------*/

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

/*--------------------------------------------------------------------*/

// типизация state
export type AppRootStateType = ReturnType<typeof rootReducer>;
// export type AppRootStateType = ReturnType<typeof store.getState>; // другая запись типизации

// типизация Dispatch и Selector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionType>;
// export type AppDispatch = typeof store.dispatch; // другая запись типизации (из доки), работает не всегда
type AppActionType = CounterActionsType // здесь все типы Action Creator

// типизация Thunk
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>

/*--------------------------------------------------------------------*/

// store.subscribe(() => {
//     localStorage.setItem('counter-state', JSON.stringify(store.getState()));
//     // можно выводить отдельное свойство объекта
//     // localStorage.setItem('counterValue', JSON.stringify(store.getState().counter.counter));
// });

/*--------------------------------------------------------------------*/

// @ts-ignore
window.store = store;