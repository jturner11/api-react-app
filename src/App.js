import React, { Component } from "react";
import "./App.css";
import { gitHubApiFetch } from "./services";
import moment from "moment";
import LanguageSearch from "./languageSearch"
import MostStarred from "./mostStarred"
import languageSearch from "./languageSearch";
import {pull} from "lodash/array";
import SelectDate from "./selectDate";

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                languages: [],
                date: moment().subtract('months', 1).format('YYYY-MM-DD'),
            };
    }

    componentWillMount () {
        console.log('[App] componentWillMount');
    }

    componentDidMount () {
        console.log('[App] componentDidMount');
    }

    addLanguage(x) {
        this.setState({ 
            languages: [...this.state.languages, x]
         }) 
    }

    removeLanguage(x){
        console.log(x)
        const updateLanguages=()=>{ return pull(this.state.languages, x)}
        this.setState({
            languages: updateLanguages()
        })
    }
    
    changeDate(date) {
        console.log(date)
        this.setState({
            date: date.format("YYYY-MM-DD")
        })
    }

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
                        onAdd={this.addLanguage.bind(this)}
                    />
                </div>
                <div className="App__SelectDate">
                    <SelectDate
                        onDateChange={this.changeDate.bind(this)}
                    />
                </div>
            </div>
            <div className="App__container">
                {this.state.languages.map((language) => {
                    return <MostStarred 
                        onRemove={this.removeLanguage.bind(this)}
                        language={ language } per_page="3"
                        date={this.state.date}
                        />
                    })
                } 
            </div>
        </div>
    );
  }
}
export default App;
