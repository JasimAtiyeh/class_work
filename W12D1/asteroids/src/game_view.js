function GameView(ctx) {
  this.game = new Game();
  this.drawing = ctx;
}

GameView.prototype.start = function() {
  setInterval(() => {
    this.game.step();
    this.game.draw(this.drawing);
  }, 20);
};

module.exports = GameView;