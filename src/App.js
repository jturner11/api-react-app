import React, { Component } from "react";
import "./App.css";
import { gitHubApiFetch } from "./services";
import moment from "moment";
import LanguageSearch from "./languageSearch"
import MostStarred from "./mostStarred"
import languageSearch from "./languageSearch";
import {pull} from "lodash/array";
import { connect } from 'react-redux';
import SelectDate from "./selectDate";
import {selectDateAction} from "./index";
import {languageSearchAction} from "./index";
import {languageDeleteAction} from "./index";



class App extends Component {
   
    componentWillMount () {
        console.log('[App] componentWillMount');
    }

    componentDidMount () {
        console.log('[App] componentDidMount');
    }

    // addLanguage(x) {
    //     this.setState({ 
    //         languages: [...this.state.languages, x]
    //      }) 
    // }

    // removeLanguage(x){
    //     console.log(x)
    //     const updateLanguages=()=>{ return pull(this.state.languages, x)}
    //     this.setState({
    //         languages: updateLanguages()
    //     })}
    

  render() {
    console.log('[App] render');
    console.log(SelectDate)
    return (
        <div className="App">
            <div className="App__title">
                <h1>Git Hub Repo App</h1>
                <h3> This app makes it easy for you to see the 3 most <br/>popular repositories for  
                    any given programming langauage.<br/> Simply type in the language you want to see.
                </h3>
            </div>
            <div className="App__SelectorContainer">
                <div className="App__LanguageSearch">
                    <LanguageSearch
                        onAdd={this.props.selectLanguage}
                    />
                </div>
                <div className="App__SelectDate">
                    <SelectDate
                        selectDate={this.props.selectDate}
                    />
                </div>
            </div>
            <div className="App__container">
                {
                    this.props.languages.map((language) => {
                    return <MostStarred 
                        onRemove={this.props.deleteLanguage}
                        language={ language } per_page="3"
                        date={this.props.date}
                        />
                    })
                  }
            </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
    return { 
        date: state.date,
        languages: state.languages
    }
} 
const mapDispatchToProps = (dispatch) => {
    return { 
        selectDate: (date) => {dispatch(selectDateAction(date))},
        selectLanguage: (language) => { dispatch(languageSearchAction(language))} ,  
        deleteLanguage: (language) => {dispatch(languageDeleteAction(language))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
