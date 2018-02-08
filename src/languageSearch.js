import React, { Component } from "react";
import "./App.css";


class LanguageSearch extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount () {
        console.log('[LanguageSearch] componentWillMount');
    }

    componentDidMount () {
        console.log('[LanguageSearch] componentDidMount');
    }

    handleChange(e) {
        this.setState({
            value: e.target.value}) 
        }
      handleSubmit(e) {
        e.preventDefault();
        console.log('[LanguageSearch]', this.searchInput.value);
        this.props.onAdd(this.searchInput.value);
      }

      render() {
          console.log('[LanguageSearch] render');
          return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Choose language:
                    <input type="text" ref={ (input) => { this.searchInput = input; } } />
                </label>
                <button type="submit" value="Submit">Submit</button>
            </form>
        )
    }
}
export default LanguageSearch
