import React, { Component } from "react";
import "./App.css";
import { increaseRepoCountAction } from "./index";
import { decreaseRepoCountAction } from "./index";


class ResultsPerPage extends Component{

    render(){
        return(
            <div className="ResultsPerPage">
                Repos displayed:
                <div className="ResultsPerPage__decrease" onClick={() => {this.props.decreaseRepoCount()}}>-</div>
                <label className="ResultsPerPage__amount"> {this.props.per_page} </label>
                <div className="ResultsPerPage__increase" onClick={() => {this.props.increaseRepoCount()}}>+</div>     
            </div>
        )
    }
}


export default ResultsPerPage