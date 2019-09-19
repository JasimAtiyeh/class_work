const FollowToggle = require("./follow_toggle.js");


$(function(){
  $(".follow-toggle").each((idx, el) => {
    let follow = new FollowToggle(el);
  })

    

});


// $(function(){
//     new ChatMachine($('.chat'));
//   });
  