//affiche les 9 cases 
import React from 'react';
import Square from './Square'


class Board extends React.Component {
 

    renderSquare(i){      //i => index 9 cases.
      return    (
                    <Square                              //deux props value et onCLick
                    key={"square " + i} 
                    value={this.props.squares[i]} 
                     onClick={() => this.props.onClick(i)}
                     />
                );                         //decoupe de l element renvoye sur pls lignes + () pour que Js ne considere
    }                                      //pas le RETURN comme autonome pour renvoyer un UNDEFINED
    
    renderSquares(d) {
      let squares = [];
      for (let i = d; i < d+3; i++) {
        squares.push(this.renderSquare(i));
      }
      return squares;
    }
  
    renderRows(i) {
      return <div className="board-row">{this.renderSquares(i)}</div>;
    }
    
    
    render (){


    
        

      return(
        <div>
      {/*     <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div> */}
        <div className="board-row">
        {this.renderRows(0)}
        {this.renderRows(3)}
        {this.renderRows(6)}
        </div>       
        </div>
      );
    }
  }
  



export default Board