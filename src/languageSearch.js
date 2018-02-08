import React, { Component } from "react";


class languageSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

      render() {
          return(
            <form onSubmit={this.handleSubmit}>
            <label>
              Language:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          )
      }

}

export default languageSearch