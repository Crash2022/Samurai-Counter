import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

export const App = () => {

    return (
        <div className="App">
            <div className="wrapper">
                <Counter />
            </div>
        </div>
    );
}