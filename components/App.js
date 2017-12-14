import React, {Component} from 'react';
import Cell from "./Cell";
import * as style from "./style.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: 0,
            letter: "X",
            cells: [
                "", "", "",
                "", "", "",
                "", "", ""
            ],
        };
    }

    onClick(index) {
        let cells = [...this.state.cells];
        if (cells[index] == "")
            cells[index] = this.state.letter;
        this.setState({
            cells: cells,
            letter: cells[index] == "X" ? "O" : "X"
        });
        let win=Winner(cells);
        if(win!=null)
            alert("Winner "+win);

    }

    render() {
        return (
            <div>
                <div className={style.info}>
                    <h1>{this.props.target}</h1>

                    <p>Player 1: "X"</p>
                    <p>Player 2: "O"</p>
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

App.propTypes = {
    target: React.PropTypes.string.isRequired
};

function Winner(squares) {
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

export default App;