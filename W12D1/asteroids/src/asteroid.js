const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

function Asteroid(pos, game){
  let options = {};
  options.game = game;
  options.pos = pos;
  options.color = "#808080";
  options.radius = 10;
  options.vel = Util.randomVec(4);
  MovingObject.call(this, options);
}

Asteroid.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  }
};

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;