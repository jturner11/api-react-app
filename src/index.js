import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import moment from "moment";
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {createAction} from "redux-actions";
import SelectDate from "./selectDate";
import logger from "redux-logger";

export const SELECT_DATE = "SELECT_DATE"
export const LANGUAGE_SEARCH = "LANGUAGE_SEARCH"
export const selectDateAction = createAction(SELECT_DATE)
export const languageSearchAction = createAction(LANGUAGE_SEARCH)

const INITIAL_STATE = {
    date: moment().subtract('months', 1).format('YYYY-MM-DD'),
    languages: []
 }

const reducer = (state = INITIAL_STATE, action) => {
    console.log(moment(action.payload).format('YYYY-MM-DD'))
    switch(action.type) {
        case SELECT_DATE:
        return {...state,date:moment(action.payload.format('YYYY-MM-DD'))}
        
        case LANGUAGE_SEARCH:
        console.log("hello" , action.payload)
        return {...state,languages: [...state.languages, action.payload]}
        default:
        
            return state
    }
}
const store = createStore(reducer, applyMiddleware(logger))
store.subscribe(() => console.log(store.getState()))
// store.dispatch({ type: 'INCREMENT' })

ReactDOM.render(        
     <Provider store={store}>
        <App />
     </Provider>,
        document.getElementById('root'))

    
