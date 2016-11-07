
$(document).ready(function(){

  $("nav, .dev").slideDown(500);

  $(".title").animate({left: "+=70%"}, 900);

// Définition du scroll:
  var stp = $("html").scrollTop();
  $(".sthg").append("<p>Scrolltop:" + stp + "</p>");

});


// Scroll to the top!
  $(".scrollTop").click(function(){
    $("html").animate({scrollTop: 0}, "slow");
  });


// Dev name slide:
  function traitement1(){
    $(".devName").animate({"opacity": "1", "left": "+=50px"}, 500);
  }
  function traitement2(){
    $(".devName").animate({"opacity": "0", "left": "-=50px"}, 500);
  }
  $(".dev").on({mouseenter:traitement1, mouseleave:traitement2});
