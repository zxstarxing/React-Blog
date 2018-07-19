import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';


const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk,promise(),logger)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
