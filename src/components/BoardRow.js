import React from 'react';
import Square from './Square.js';

class BoardRow extends React.Component{
    constructor(){
        super();
        this.state = {
            numberOfCells: 3,
        }
    }

    renderSquare(i) {
        var index = (this.props.rowId * this.state.numberOfCells) + i;
        return <Square value={this.props.squares[index]} onClick={() => this.props.onClick(index, this.props.rowId + 1, i + 1)} key={index}/>;
    }
    
    render(){
        var rowSquares = [];
        for(var i = 0; i < this.state.numberOfCells; i++){
            rowSquares.push(this.renderSquare(i));
        }
        return(
            <div className="board-row" key={this.props.index}>
                {rowSquares}
            </div>
        );
    }
}

export default BoardRow;