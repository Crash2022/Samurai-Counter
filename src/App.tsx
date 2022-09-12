import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingsCounter} from "./components/Settings/SettingsCounter";

export const App = () => {
    return (
        <div className="App">
            <div className="wrapper">
                <Counter />
                <SettingsCounter />
            </div>
        </div>
    );
}