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
import {add} from "lodash/math";
import {subtract} from "lodash/math";

export const SELECT_DATE = "SELECT_DATE"
export const LANGUAGE_SEARCH = "LANGUAGE_SEARCH"
export const LANGUAGE_DELETE = "LANGUAGE_DELETE"
export const INCREASE_RESULTS_PER_PAGE = "INCREASE_RESULTS_PER_PAGE"
export const DECREASE_RESULTS_PER_PAGE = "DECREASE_RESULTS_PER_PAGE"
export const selectDateAction = createAction(SELECT_DATE)
export const languageSearchAction = createAction(LANGUAGE_SEARCH)
export const languageDeleteAction = createAction(LANGUAGE_DELETE)
export const increaseRepoCountAction = createAction(INCREASE_RESULTS_PER_PAGE)
export const decreaseRepoCountAction = createAction(DECREASE_RESULTS_PER_PAGE)

const INITIAL_STATE = {
    date: moment().subtract('months', 1).format('YYYY-MM-DD'),
    languages: [],
    numberOfRepos: 2,
 }
const increment = (numberOfRepos) => {
    return  add(numberOfRepos,1) 
}
const decrease = (numberOfRepos) => {
    return  subtract(numberOfRepos,1) 
}
const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SELECT_DATE:
        return {...state,date:moment(action.payload).format('YYYY-MM-DD')}
        case LANGUAGE_SEARCH:
        return {...state,languages: [...state.languages, action.payload]}
        case LANGUAGE_DELETE:
        return {...state, languages: remove(state.languages, (language)=> { return language !== action.payload})}
        case INCREASE_RESULTS_PER_PAGE:
        return {...state, numberOfRepos: increment(state.numberOfRepos)}
        case DECREASE_RESULTS_PER_PAGE:
        return {...state, numberOfRepos: decrease(state.numberOfRepos)}
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

    
