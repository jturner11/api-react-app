import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import moment from "moment";
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {createAction} from "redux-actions";
import SelectDate from "./selectDate";

export const SELECT_DATE = "SELECT_DATE"
export const selectDateAction = createAction(SELECT_DATE)

const INITIAL_STATE = {
    date: moment().subtract('months', 1).format('YYYY-MM-DD')
 }

const reducer = (state = INITIAL_STATE, action) => {
    console.log(moment(action.payload).format('YYYY-MM-DD'))
    switch(action.type) {
        case SELECT_DATE:
        return {...state,date:moment(action.payload.format('YYYY-MM-DD'))}
        case INITIAL_STATE:
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

    
