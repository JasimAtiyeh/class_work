// Prototypal Inheritance 

// Function.prototype.inherits = function (parent) {
//     function Surrogate () {}; 
//     Surrogate.prototype = parent.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// }

Function.prototype.inherits2 = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}


function MovingObject() { }

MovingObject.prototype.fly = function () {
    console.log("I'm flying or something.");
}

function Ship() { }
Ship.inherits2(MovingObject);

Ship.prototype.shoot = function () {
    console.log("I'm shooting an asteroid.");
}

function Asteroid() { }
Asteroid.inherits2(MovingObject);

Asteroid.prototype.smash = function () {
    console.log("I smash.");
}
