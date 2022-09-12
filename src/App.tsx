import React from 'react';
import './App.css';
import {Timer} from "./components/Timer";

export const App = () => {
    return (
        <div className="App">
            <div className="wrapper">
                <Timer />
            </div>
        </div>
    );
}