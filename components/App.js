import React, {Component} from 'react';
import PageGame from "./PageGame";
import StartPage from "./StartPage";
import Cell from "./Cell";
import * as style from "./style.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            click:0
        }
        this.selectStart=this.selectStart.bind(this);
    }
    selectStart(click){
        this.setState({click})
    }

    render() {

       // debugger;
          /*  return (
                <StartPage selectStart={this.selectStart} target="Tic tac toe"/>

            )*/
            return(
                <PageGame target="Tic tac toe"/>
            )
    }
}

App.propTypes = {
    target: React.PropTypes.string.isRequired
};


export default App;