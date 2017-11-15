import css from './scss/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './js/App';
import reducers from './js/reducers';


const rootEl = document.getElementById('root');
//const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(reduxThunk),
    // other store enhancers if any
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootEl );