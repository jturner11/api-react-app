import React, { Component } from "react";
import "./App.css";
import { gitHubApiFetch } from "./services";
import moment from "moment";
import LanguageSearch from "./languageSearch"
import MostStarred from "./mostStarred"
import languageSearch from "./languageSearch";
import {pull} from "lodash/array";

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                languages: [],
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

  render() {
    console.log('[App] render');
    return (
        <div className="App">
            <div className="App__title">
                <h1>Git Hub Repo App</h1>
                <h3> This app makes it easy for you to see the 3 most <br/>popular repositories for  
                    any given programming langauage.<br/> Simply type in the language you want to see.
                </h3>
            </div>
            <LanguageSearch
                onAdd={this.addLanguage.bind(this)}
             />
            <div className="App__container">
            {this.state.languages.map((language) => {
                    return <MostStarred 
                    onRemove={this.removeLanguage.bind(this)}
                    language={ language } date="2017-04-12" per_page="3"/>
            })} 
            </div>
        </div>
    );
  }
}
export default App;
