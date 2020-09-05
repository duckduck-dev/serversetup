import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';

const Store = createStore(reducers, {
                    auth: { authenticate: localStorage.getItem('Token') }
    }, applyMiddleware(reduxThunk) );

render( 
        <Provider store={Store}>
            <App />
        </Provider>
    , document.querySelector('#root') );