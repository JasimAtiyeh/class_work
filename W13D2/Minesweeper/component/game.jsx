import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    // this.n = 1;
    const board = new Minesweeper.Board(9, 12);

    this.state = {board: board};
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.changeDifficulty = this.changeDifficulty.bind(this);
  }
  
  updateGame(tile, flag){
    if (flag) {
      tile.toggleFlag()
    } else {
      tile.explore()
    }
    this.setState({board: this.state.board})
  }

  changeDifficulty(e) {
    // debugger;
    let n = e.currentTarget.id;
    let mult = n === 'easy' ? 1 : n === 'medium' ? 2 : 3;

    this.setState({ board: new Minesweeper.Board(9 * mult, 12 * mult) })
  }

  restartGame() {
    this.setState({board: new Minesweeper.Board(9, 12)})
  }

  render(){
    const board = this.state.board;
    let text, klass, klass2;

    if (board.won()){
      text = "You won! 👍 "
      klass = "screen"
      klass2 = "content"
    } else if (board.lost()){
      text = "(ノ￣ー￣)ノ You are a loser  ＼(^ω^＼)"
      klass = "screen"
      klass2 = "content"
    }
    
    return( 
      <div className='board'> 
        <div className={`modal-${klass}`}>
          <div className={`modal-${klass2}`}>
            <p>
              {text}
            </p>
            <button onClick={this.restartGame}>Restart Game</button>
            <button onClick={this.changeDifficulty} id="easy"> Easy </button>
            <button onClick={this.changeDifficulty} id="medium"> Medium </button>
            <button onClick={this.changeDifficulty} id="hard"> Hard </button>
            {/* If the easy mode n = 1, if medium n = 2, if hard n = 3 */}
          </div>
        </div>
        <Board board = {this.state.board} updateGame = {this.updateGame} />
      </div>
    )}
}