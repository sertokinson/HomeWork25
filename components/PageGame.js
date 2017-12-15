import React from "react";
import * as style from './style.css';
import Cell from "./Cell";

export default class PageGame extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            restart: false,
            title:"Tic tac toe",
            letter: "X",
            cells: [
                "", "", "",
                "", "", "",
                "", "", ""
            ],
        };
        this.restart = this.restart.bind(this);
    }
    Winner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    onClick(index) {
        let cells = [...this.state.cells];
        if (cells[index] === "")
            cells[index] = this.state.letter;
        this.setState({
            cells: cells,
            letter: cells[index] === "X" ? "O" : "X"
        });
        let win=this.Winner(cells);
        if(win!=null) {
            this.setState({restart:true,title:"Winner " + win +". Restart?"});
            return;
        } else {
            if(cells.indexOf("") === -1){
                this.setState({restart:true,title:"Draw. Restart?"});
            }
        }



    }

    restart(){
        if(!this.state.restart){
            return;
        }
        const initState = {
            restart: false,
            title:"Tic tac toe",
            letter: "X",
            cells: [
                "", "", "",
                "", "", "",
                "", "", ""
            ],
        };
        this.setState(initState);

    }


    render() {
        let titleStyle = style.title;
        if(this.state.restart){
            titleStyle +=" " + style.hoverTitle;
        }
        return (
            <div>
                <div className={style.info}>
                    <div className={titleStyle} onClick={this.restart}>{this.state.title}</div>
                    <div className={style.players}>
                        <div className={style.player1}><span>Player 1</span>X</div>
                        <div className={style.player2}><span>Player 2</span>O</div>
                    </div>
                </div>
                <div className={style.container}>
                    {this.state.cells.map((item,index) => {
                        return <Cell onClick={()=>{this.onClick(index)}} value={item}/>
                    })}
                </div>
            </div>
        )
    }



}