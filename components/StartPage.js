import React from "react";
import * as style from './style.css';
import Cell from "./Cell";

export default class StartPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cells: ["X", "O"],
            click:0
        };
    }
    onClick() {
        this.setState({
                click:1
            });
    }
    render() {
        return (
            <div>
                <div className={style.info}>
                    <div className={style.title}>{this.props.target}</div>
                </div>
                <div className={style.container}>
                    {this.state.cells.map((item) => {
                        return <Cell value={item}/>
                    })}
                </div>
                <div className={style.container}> <button onClick={() => this.props.selectStart(1)} className={style.startButton}>Start game</button></div>

            </div>
        )
    }
}