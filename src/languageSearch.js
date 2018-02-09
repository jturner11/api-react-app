import React, { Component } from "react";
import "./App.css";


class LanguageSearch extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
     }
    
      handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.searchInput.value);
      }
      handleDelete(e) {
        e.preventDefault();
        this.props.onClick(this.searchInput.remove);
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
