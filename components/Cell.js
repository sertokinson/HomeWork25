import React from "react";
import * as style from './style.css';
import App from "./App";


export default class Cell extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: "",

        };
    }

    render(){

        return (
            <div onClick={this.props.onClick} className={style.cell}><span>{this.props.value}</span></div>
        );
    }
}