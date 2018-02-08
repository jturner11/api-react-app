import React, { Component } from "react";
import "./App.css";
import { gitHubApiFetch } from "./services";
import moment from "moment";
import LanguageSearch from "./languageSearch"
import MostStarred from "./mostStarred"

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="App__title">
            <h1>Find the best repos for any given langauge</h1>
            </div>
            <LanguageSearch/>
            <div className="App__container">
                <MostStarred language="PHP" date="2017-04-12" per_page="3"/>
                {/* <MostStarred language="Ruby" date="2016-01-01" per_page="3"/>
                <MostStarred language="Javascript" date="2015-11-03" per_page="3" /> */}
            </div>
        </div>
    );
  }
}
export default App;
