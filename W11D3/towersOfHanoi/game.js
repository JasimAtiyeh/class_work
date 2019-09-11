class TowersOfHanoi {
  run() {
    //until all disks are from biggest to smallest stacked on a different column
    //cannot stack a bigger disk onto a smaller ring
    //can only move a single ring at a time
  }
}

class Game {
  constructor(disks, towers) {
    this.disks = disks;
    this.towers = towers;
  }

  promptMove() {
    console.log(this.towers);
    console.log()
    let move = readline("Where Would you like to move ? [from, to]");
    makeMove(move);
  }

  makeMove() {
    
  }
}