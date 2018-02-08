import React, { Component } from "react";
import "./App.css";
import { gitHubApiFetch } from "./services";
import moment from "moment";
class MostStarred extends Component {
  constructor(props) {
    super(props);
    this.state = {
        repos: [],
     };
  }

    componentWillMount () {
        const { date, language, per_page } = this.props;
        // const date = '2018-01-12';
        
        gitHubApiFetch(date, language, per_page)
            .then(({ items }) => {
                this.setState({ repos: items });
            })
    }

    renderRepo (repo, index) {
        const { name, html_url, description, created_at, stargazers_count } = repo;
        return (
                <div className="repo-box" key={ `repo-${index}` }>
                        <p className="repo-box__name">
                            <h4> { name } </h4>
                        </p>
                    <p><a href="{ html_url }"> { html_url} </a> </p>
                    <p className="repo-box__description"> { description }</p>
                        <p>
                            <span className="repo-box__date">{ moment(created_at).format("Do-MMMM-YYYY") }</span>{" "}
                            <span className="repo-box__stars">
                                <p>{ stargazers_count }</p>
                            </span>
                    </p>
                </div>
        );
    }
  

    render() {
        return (
            <div className="repo-list">
                <div className="repo-list__langauge">
                     {this.props.language}
                </div>
                { this.state.repos.map(this.renderRepo) }
            </div>  
        );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App__title">
        <h1>Find the best repo's for any given langauge</h1>
      </div>
      <div className="App__container">
        <MostStarred language="PHP" date="2017-04-12" per_page="3"/>
        <MostStarred language="Ruby" date="2016-01-01" per_page="3"/>
        <MostStarred language="Javascript" date="2015-11-03" per_page="3" />
        </div>
      </div>
    );
  }
}

export default App;
