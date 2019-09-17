const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
const Shipo = require("./ship.js");

window.addEventListener("DOMContentLoaded", (event) => {
      let canvas = document.getElementById("game-canvas");
window.ctx = canvas.getContext("2d");
let gameView = new GameView(ctx);
gameView.start();
});

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;

