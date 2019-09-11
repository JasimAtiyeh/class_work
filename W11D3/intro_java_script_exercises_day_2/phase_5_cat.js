function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  console.log(`${ this.owner } loves ${ this.name }`);
}

let jared = new Cat('Jared', 'Barbra');
let tubs = new Cat('Tubs', 'Susan');
let figNewton = new Cat('Fig Newton', 'Barbra');
let alCapone = new Cat('Al Capone', 'Margret');

Cat.prototype.cuteStatement = function () {
  console.log(`Everyone loves ${this.name}`);
}

Cat.prototype.meow = function(count) {
  if (count === NaN || count === 0) return console.log(`meow`);
  console.log(`meow`);
  this.meow(count - 1);
}

jared.meow = function() {
  console.log(`meow!!`);
}