import React from 'react';

// localStorage.js

/*
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};*/



//     let localValueMax = localStorage.getItem('inputMaxValue')
//     if (localValueMax) {
//         let newLocalValueMax = JSON.parse(localValueMax);
//         setInputMaxValue(newLocalValueMax);
//     }
//
//     let localValueStart = localStorage.getItem('inputStartValue')
//     if (localValueStart) {
//         let newLocalValueStart = JSON.parse(localValueStart);
//         setInputStartValue(newLocalValueStart);
//     }
//
//     let localValueSetButton = localStorage.getItem('isSetting')
//     if (localValueSetButton) {
//         let newLocalValueSetButton = JSON.parse(localValueSetButton);
//         setIsSetting(newLocalValueSetButton);
//     }
//
//     let localCounterValue = localStorage.getItem('counter')
//     if (localCounterValue) {
//         let newLocalCounterValue = JSON.parse(localCounterValue);
//         setCounter(newLocalCounterValue);
//     }
//
//     let localErrorValue = localStorage.getItem('error')
//     console.log('localErrorValue', localErrorValue)
//     if (localErrorValue) {
//         let newLocalErrorValue = JSON.parse(localErrorValue);
//         setError(newLocalErrorValue);
//     }



//     localStorage.setItem('inputMaxValue', JSON.stringify(inputMaxValue));
//     localStorage.setItem('inputStartValue', JSON.stringify(inputStartValue));
//     localStorage.setItem('isSetting', JSON.stringify(isSetting));
//     localStorage.setItem('counter', JSON.stringify(counter));
//     localStorage.setItem('error', JSON.stringify(error));