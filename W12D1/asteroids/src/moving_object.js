function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.fillStyle = this.color;
  ctx.fill();
}

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.pos = this.game.wrap(this.pos);
};

MovingObject.prototype.isCollided = function(otherObject) {
  let radiusSum = this.radius + otherObject.radius;
  let pos0 = this.pos[0] - otherObject.pos[0];
  let pos1 = this.pos[1] - otherObject.pos[1];
  let dist = Math.sqrt(Math.pow(pos0, 2) + Math.pow(pos1, 2));
  if(dist < radiusSum) return true; 
  return false;
};

MovingObject.prototype.collideWith = function(otherObject) {
  
}


module.exports = MovingObject;