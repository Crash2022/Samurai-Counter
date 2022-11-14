import {AppRootStateType} from "../redux/store";

export const loadState = () => {
    try {
        let preloadedState;
        const persistedTodosString = localStorage.getItem('counter-state');
        if (persistedTodosString) {
            preloadedState = JSON.parse(persistedTodosString);
        }
        return preloadedState;
    }
    catch {
        return undefined;
    }
}

export const saveState = (state: AppRootStateType) => {
    try {
        localStorage.setItem('counter-state', JSON.stringify(state));
        // можно выводить отдельное свойство объекта
        // localStorage.setItem('counterValue', JSON.stringify(store.getState().counter.counter));
    }
    catch {
        // some logic
    }
}




