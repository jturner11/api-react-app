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
import {remove} from "lodash/array";

export const SELECT_DATE = "SELECT_DATE"
export const LANGUAGE_SEARCH = "LANGUAGE_SEARCH"
export const LANGUAGE_DELETE = "LANGUAGE_DELETE"
export const selectDateAction = createAction(SELECT_DATE)
export const languageSearchAction = createAction(LANGUAGE_SEARCH)
export const languageDeleteAction = createAction(LANGUAGE_DELETE)

const INITIAL_STATE = {
    date: moment().subtract('months', 1).format('YYYY-MM-DD'),
    languages: []
 }

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SELECT_DATE:
        return {...state,date:moment(action.payload).format('YYYY-MM-DD')}
        case LANGUAGE_SEARCH:
        return {...state,languages: [...state.languages, action.payload]}
        case LANGUAGE_DELETE:
        return {...state, languages: remove(state.languages, (language)=> { return language !== action.payload})}
        default:
        return state
    }
}

const store = createStore(reducer, applyMiddleware(logger))
store.subscribe(() => console.log(store.getState()))

ReactDOM.render(        
     <Provider store={store}>
        <App/>
     </Provider>,
        document.getElementById('root'))

    
