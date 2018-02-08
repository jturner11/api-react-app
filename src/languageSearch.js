import React, { Component } from "react";
import "./App.css";


class LanguageSearch extends Component {
    constructor(props) {
        super(props);

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(e) {
    //     this.setState({
    //         value: e.target.value}) 
    //     }
      handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.searchInput.value);
      }

      render() {
          console.log('[LanguageSearch] render');
          return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Add language:
                    <input type="text" ref={ (input) => { this.searchInput = input; } } />
                </label>
                <button type="submit" value="Submit">Add</button>
            </form>
        )
    }
}
export default LanguageSearch
