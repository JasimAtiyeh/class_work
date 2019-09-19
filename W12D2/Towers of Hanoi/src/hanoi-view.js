class View {
  constructor(game, $el) {
    this.game = game;
    this.board = $el;
    this.setupTowers();
  }

  setupTowers() {
    [1,2,3].forEach(step => {
      const $ul = $("<ul>");
      $ul.addClass("tower");
      $ul.data("tower-no", step);
      this.board.append($ul);
    }) 

    $("ul").each(function() {
      debugger;
      $(this).append($("<li>"), $("<li>"), $("<li>"));
    })
  }

}

module.exports = View;