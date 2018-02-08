import React, { Component } from "react";
import "./App.css";


class LanguageSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            value: e.target.value}) 
        }
      handleSubmit(e) {
        console.log('a name was submitted: ' + this.state.value);
        e.preventDefault();
        
      }

      render() {
          return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Choose language:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <button type="submit" value="Submit" >Submit</button>
          </form>
        )
    }
}
export default LanguageSearch
