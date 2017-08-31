import React from 'react';
import BoardRow from './BoardRow.js';

class Board extends React.Component {
    render() {
        var rows = [];

        for(var i = 0; i < 3; i++){
            rows.push(
                      <BoardRow squares={this.props.squares} 
                                rowId={i} 
                                onClick={(i, row, col) => this.props.onClick(i, row, col)} key={i} />
                     );
        }

        return (
            <div>
                {rows}
            </div>
        );
    }
}

export default Board;