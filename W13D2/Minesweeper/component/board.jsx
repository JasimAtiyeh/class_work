import React from 'react';
import * as Minesweeper from '../minesweeper';
import Tile from './tile';

export default class Board extends React.Component{
  constructor(props) {
    super(props)

    this.render.bind();
  }

  render(){
    const board = this.props.board.grid;
    // debugger;
    return(
    <div className='Board'>
      {board.map((row, idx) => {
        return(
        <div className ='row' key={idx}>
          {row.map((tile, jdx) => {
            return <Tile tile={tile} updateGame={this.props.updateGame} key={(idx * 10) + jdx + 1} />
          })}
        </div>)
      })}
    </div>
    )
  }

}