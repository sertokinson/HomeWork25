import React, {Component} from 'react';
import Cell from "./Cell";
import * as style from "./style.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click:0,
            letter:"X",
            cells:["","","","","","","","",""],
        };
    }

    onClick(index){
        let cells = [...this.state.cells];
        cells[index] =this.state.letter ;
        this.setState({
            cells:cells,
            letter:cells[index]?"O":"X"
        });
    }
    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.target}</h1>
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

export default App;