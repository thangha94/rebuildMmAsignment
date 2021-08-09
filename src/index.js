import 'core-js/stable';
import 'core-js/modules/es.symbol';
import 'regenerator-runtime/runtime';
import 'intersection-observer';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import App from './App';
import store from "./redux/store";
import './styles/main.scss';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)