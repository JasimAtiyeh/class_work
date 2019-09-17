const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

function Ship(pos, game) {
  let options = {};
  options.game = game;
  options.pos = pos;
  options.color = "#00ff00";
  options.radius = 7;
  options.vel = [0,0];
  MovingObject.call(this, options);
}

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
};

Util.inherits(Ship, MovingObject);

module.exports = Ship