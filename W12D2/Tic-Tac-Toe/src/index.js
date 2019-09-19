const View = require("./ttt-view.js");// require appropriate file
const Game = require("./game.js"); // require appropriate file

  $(() => {
    let game = new Game();
    $board = $(".ttt");
    let view = new View(game, $board);

  });
