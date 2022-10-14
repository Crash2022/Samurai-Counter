import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import {App} from './App';
//import {AppReducer} from './AppReducer';
import * as serviceWorker from './serviceWorker';
//import {CounterReducer} from "./components/CounterReducer/Counter/CounterReducer";
import {CounterRedux} from "./components/CounterRedux/Counter/CounterRedux";
import {Provider} from "react-redux";
import {store} from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <CounterRedux />
    </Provider>
    , document.getElementById('root'));

//ReactDOM.render(<CounterReducer/>, document.getElementById('root'));
//ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();