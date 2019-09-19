
  const FollowToggle = function(el){
      $el = $(el);
      this.userId = $el.data('user_id');
      this.followState = $el.data('follow-state');
      this.render();
      $el.on("click", e => {
        e.preventDefault();
        this.handleClick();
      }).bind(this);
  }


  FollowToggle.prototype.render = function() {
    if (this.followState === "unfollowed") {
      $el.text("Follow!");
    } else {
      $el.text("Unfollow!");
    }
  }

  FollowToggle.prototype.handleClick = function () {
      
      const post = () => {
          $.ajax({
              method: "POST",
              url: `/users/${this.userId}/follow`,
              dataType: "json",
              success: () => {
                  debugger;
                //   $("follow-toggle").attr("follow-state", "followed");
                //   debugger;
                  this.render();
              }
          })
      }
      
      const destroy = () => {
          $.ajax({
              method: "DELETE",
              url: `/users/${this.userId}/follow`,
              dataType: "json",
              success: () => {
                  debugger;
                //   this.followState.attr("unfollowed");
                //   $("follow-toggle").attr("follow-state", "unfollowed");
                //   debugger;
                  this.render();
              }
          })
      }
      this.render();
      
    //   debugger;
      if (this.followState === "unfollowed") {
          return post();
        } else {
            return destroy();
        }
  }
  module.exports = FollowToggle;

