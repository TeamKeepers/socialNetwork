import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

import { Provider } from 'react-redux';
import store from "./store";

import { GlobalStyle } from "./styles";
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles'


import './index.css';
ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
            <GlobalStyle />
        </ThemeProvider>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
