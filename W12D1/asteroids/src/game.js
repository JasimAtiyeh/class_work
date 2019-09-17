const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");

function Game() {
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship(this.randomPosition(), this);

}


Game.prototype.addAsteroids = function() {
  for(let i = 0; i <= NUM_ASTEROIDS; i++ )
  this.asteroids.push(new Asteroid(this.randomPosition(), this));
}

Game.prototype.randomPosition = function() {
 let num1 = Math.floor((Math.random() * 500) + 1);
let num2 = Math.floor((Math.random() * 500) + 1);
return [num1, num2];
 
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0,500, 500);
  this.allObjects().forEach((el) => {
    el.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.allObjects().forEach((el) => {
    el.move();
  });
};

Game.prototype.wrap = function(pos) {
  let wrappedPos = pos;
  if(pos[0] > 500) {
    wrappedPos[0] -=500;
  } else if (pos[0] < 0) {
    wrappedPos[0] += 500;
  } 
   if (pos[1] > 500) {
     wrappedPos[1] -= 500;
   } else if (pos[1] < 0) {
     wrappedPos[1] += 500;
   }
  return wrappedPos;
}

Game.prototype.checkCollisions = function(){
  for (let i = 0; i < this.allObjects().length - 1; i++) {
    for (let i2 = i + 1; i2 < this.allObjects().length; i2++) {
      if (this.allObjects()[i].isCollided(this.allObjects()[i2])) {
        this.allObjects()[i].collideWith(this.allObjects()[i2]);
      }
    }
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(asteroid){
  let idx = this.asteroids.indexOf(asteroid);
  this.asteroids.splice(idx, 1);
  // delete this.asteroids[idx];
}

Game.prototype.allObjects = function() {
  let all = [];
  all.concat(this.asteroids);
  return all.push(this.ship);
};

const DIM_X = 0;
const DIM_Y = 0;
const NUM_ASTEROIDS = 9;

module.exports = Game;