import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import moment from "moment";
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const INITIAL_STATE = {
    date: moment().subtract('years', 1).format('YYYY-MM-DD')
 }

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state
    }
}
const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
// store.dispatch({ type: 'INCREMENT' })

ReactDOM.render(        
     <Provider store={store}>
        <App />
     </Provider>,
        document.getElementById('root'))

