import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import {App} from './App';
//import {AppRedux} from './AppRedux';
import * as serviceWorker from './serviceWorker';
import {CounterRedux} from "./components/CounterRedux/Counter/CounterRedux";

ReactDOM.render(<CounterRedux />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();