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
        this.props.onDateChange(date)  
    }
  
    render() {
        return <DatePicker
            onChange={this.handleChange}
            placeholderText="Click to select a date"
        />;
    }
}

export default SelectDate