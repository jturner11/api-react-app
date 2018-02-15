import React, { Component } from "react";
import "./App.css";
import moment from "moment";
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';

class SelectDate extends React.Component {
    constructor (props) {
      super(props)
        this.state = {
        startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(date) {
        this.props.selectDate(date)  
    }
  
    render() {
        return <div className="App__SelectDate__date-container"><label>Select Date:</label><DatePicker
                onChange={this.handleChange}
                placeholderText={this.props.date}
            />
            </div>
    }
}

export default SelectDate