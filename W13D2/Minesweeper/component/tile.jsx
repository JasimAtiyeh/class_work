import React from 'react';
import * as Minesweeper from '../minesweeper';


export default class Tiles extends React.Component {

  constructor(props){
    super(props);
    const tile = this.props.tile;
    this.state = {bombed: tile.bombed, explored: tile.explored, flagged: tile.flagged};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const flag = e.altKey ? true : false;
    this.props.updateGame(this.props.tile, flag);
  }

  render(){
    let klass;
    let sym;
    const tile = this.props.tile;
    if (tile.explored) {
      if (tile.bombed) {
        klass = 'bombed';
        sym = '💣';
      } else {
        let bombCount = tile.adjacentBombCount();
        sym = (bombCount > 0 ? `${bombCount}` : '');
        klass = `explored _${bombCount}`;
      }
    } else if (tile.flagged) {
      klass = 'flagged';
      sym = '⚑';
    }else{
      klass = 'unexplored'
    }
    return( //tile bombed/flagged/explored
      <div className={ `tile ${klass}`} onClick={this.handleClick}> {sym} </div>
    )
  }


}