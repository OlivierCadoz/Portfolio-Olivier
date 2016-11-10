
$(document).ready(function(){

  $("nav, .dev").slideDown(500);

  $(".title").animate({left: "+=71%"}, 900);


// Définition du scroll:

  var stp = $("html").scrollTop();
  $(".sthg").append("<p>Scrolltop:" + stp + "</p>");


  setInterval(function(){});


});



// Scroll to the top!

$(".scrollTop").click(function(){
  $("html").animate({scrollTop: 0}, "slow");
});


// Dev name slide:

function traitement1(){
  $(".devName").animate({"opacity": "1", "left": "+=110px"}, 400);
}
function traitement2(){
  $(".devName").animate({"opacity": "0", "left": "-=110px"}, 400);
}
$(".dev").on({mouseenter:traitement1, mouseleave:traitement2});


// Carrousel:

$("#click1").click(function(){
  $("#img1").animate({"order": "1"}, 1000);
  $("#img2, #img3, #img4").animate({"order": "2"}, 1000);
});

$("#click2").click(function(){
  $("#img2").animate({"order": "1"}, 1000);
  $("#img1, #img3, #img4").animate({"order": "2"}, 1000);
});

$("#click3").click(function(){
  $("#img3").animate({"order": "1"}, 1000);
  $("#img1, #img2, #img4").animate({"order": "2"}, 1000);
});

$("#click4").click(function(){
  $("#img4").animate({"order": "1"}, 1000);
  $("#img1, #img2, #img3").animate({"order": "2"});
});


// $("#click1").setInterval(function(){
//   $("#img1").animate({"left": "0%"}, "slow");
//   $("#img2").animate({"left": "100%"}, "slow");
//   $("#img3").animate({"left": "200%"}, "slow");
//   $("#img4").animate({"left": "300%"}, "slow");
// });
//
// $("#click2").click(function(){
//   $("#img1").animate({"left": "300%"}, "slow");
//   $("#img2").animate({"left": "0%"}, "slow");
//   $("#img3").animate({"left": "100%"}, "slow");
//   $("#img4").animate({"left": "200%"}, "slow");
// });
//
// $("#click3").click(function(){
//   $("#img1").animate({"left": "200%"}, "slow");
//   $("#img2").animate({"left": "300%"}, "slow");
//   $("#img3").animate({"left": "0%"}, "slow");
//   $("#img4").animate({"left": "100%"}, "slow");
// });
//
// $("#click4").click(function(){
//   $("#img1").animate({"left": "100%"}, "slow");
//   $("#img2").animate({"left": "200%"}, "slow");
//   $("#img3").animate({"left": "300%"}, "slow");
//   $("#img4").animate({"left": "0%"}, "slow");
// });
