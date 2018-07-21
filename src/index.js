import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import * as reducer from './Store/rootreducer'

const store = createStore(combineReducers(reducer), applyMiddleware(thunk))

ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
