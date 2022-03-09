//affiche plateau avec valeurs temporaires
import React from 'react';
import Board from './Board';



class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [
        {
        squares : Array(9).fill(null) //fill =>remplir le contenu du tableau initial par null
      }
    ],
      stepNumber : 0,
      xIsNext: true,
      isDescending: true
    };
  }








  handleClick(i) {
    const locations = [             //creation array d'array combinaison [col,row] [^ , >]
      ["colone 1", "line 1"],
      ["colone 2", "line 1"],
      ["colone 3", "line 1"],
      ["colone 1", "line 2"],
      ["colone 2", "line 2"],
      ["colone 3", "line 2"],
      ["colone 1", "line 3"],
      ["colone 2", "line 3"],
      ["colone:3","line:3"]
    ];
    const history = this.state.history/* .slice(0, this.state.stepNumber + 1); */
    const current = history[history.length - 1];
    const squares =current.squares.slice();   //slice => creation copie tableau squares pouvant etre modif
    
    if (calculateWinner(squares)  || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
        history: history.concat([
          {                                                //concat diff de push car elle ne modifie pas le tableau d origine (record history)
          squares: squares,
          location: locations[i]
          }
      ]),
        
      stepNumber: history.length,  
      xIsNext: !this.state.xIsNext
        
    });
}

jumpTo(step){
  this.setState({
    stepNumber: step,                       //tour actuellement affiché
    xIsNext: (step % 2) === 0
  });
}
sortHistory() {
  this.setState({
    isDescending: !this.state.isDescending
  });
}

    render (){
      const history =this.state.history;
      const current= history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      const moves = history.map((step, move) => {
        const desc = move 
        ? "Revenir au tour n° " + move + " @ " + history[move].location 
        :"Revenir au début de la partie ";
           

      return (
        <li key={move}>
          <button className="restart" onClick={() => this.jumpTo(move)}>{move == this.state.stepNumber ? <b>{desc}</b> : desc}</button>
        </li>
      );
      });
      let status;
      if(winner){
        status = winner.player + " a gagné " /* + " à la ligne " + winner.line; */

      }else if (!current.squares.includes(null)) {
        status = "draw";
      }else {
        status = "Joueur suivant: " + (this.state.xIsNext ? "X" : "O");
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board
            winningSquares={winner ? winner.line : []}
            squares ={current.squares}
            onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div className='status'>{status}</div>
            <ol className='moves'>{this.state.isDescending ? moves : moves.reverse()}</ol>
            <button onClick={() => this.sortHistory()}>
            Tri: {this.state.isDescending ? "Descendant" : "Ascendant"}
            </button>
          </div>
        </div>
      );
      }  
    }
  
  


 


  function calculateWinner(squares) {
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
        return { player: squares[a], line: [a,b,c]};
      }
    }
    return null;
  }


export default Game