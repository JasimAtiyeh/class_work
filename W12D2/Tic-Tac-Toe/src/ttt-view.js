class View {
  constructor(game, $el) {
    this.game = game;
    this.board = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $grid = $(".grid");
    $grid.on("click", "li", event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
      $square.removeClass("unclicked");
      $square.addClass("clicked");
    });
  }

  makeMove($square) {
    try {
      let pos = $square.data("pos");
      let mark = this.game.currentPlayer;
      this.game.playMove(pos);
      $square.children().text(mark);
    } catch(error) {
      alert(error.msg);
    }

    if (this.game.isOver()) {
      this.end();
    }
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("grid");
    this.board.append($ul);

    this.game.board.grid.forEach((row, i) => {
      row.forEach((space, j) => {
        let pos = [i, j];
        let $li = $("<li>");
        $li.data("pos", pos);
        $li.addClass("unclicked");
        let $span = $("<span>");
        //$span.text("X");
        $li.append($span);
        $ul.append($li);
      });
    });
  }

  end() {
    const $grid = $(".grid");
    $grid.off("click", "li");
    $(".grid li").removeClass("clicked");
    $(".grid li").removeClass("unclicked");
    $(".grid li").addClass("notwinner");
    

    let msg;

    if (this.game.winner()) {
      const winner = this.game.winner();
      const loser = (winner === "O" ? "X" : "O");
      const $winner = $(`li:contains(${winner})`);
      $winner.removeClass("notwinner");
      $winner.addClass("winner");
      msg = `You win, ${winner}`;
    } else {
      msg = "It's a draw!";
    }

    //const msg = (this.game.winner() ? `You win, ${this.game.winner()}` : "It's a draw!");

    const $msg = $("<p>");
    $msg.text(msg).addClass("message");
    this.board.append($msg);
  }
}

module.exports = View;
