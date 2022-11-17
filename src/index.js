import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './modules/modalStore';
import bookmarkReducer from './modules/bookmarkStore';
import rootReducer from './modules/combineReducer';
import { createGlobalStyle } from 'styled-components';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer);

const GlobalStyles = createGlobalStyle`
      body {
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
        margin : 0;
        background-color: #f8f8f8;
        font-family: 'Nanum Gothic', sans-serif;
            }
`;

root.render(
  
  <BrowserRouter>
  <Provider store={store}>
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
  </Provider>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
