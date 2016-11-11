
$(document).ready(function(){

$("nav, .dev").slideDown(400);
$(".scrollTop").hide();



//Vanish/show nav and scroll to the top!:

$(window).scroll(function(){
	posScroll = $(document).scrollTop();
	if(posScroll >= 300){
    $('nav, .dev').slideUp(400);
    $(".scrollTop").fadeIn(200);
  }
	else{
    $('nav, .dev').slideDown(400);
    $(".scrollTop").fadeOut(200);
  }

});



// Title slide:
  $(".title").animate({left: "+=68%"}, 900);



// Définition du scroll:

  var stp = $("html").scrollTop();
  $("footer").append("<p>Scrolltop:" + stp + "</p>");



// Carrousel automatique:
    setInterval(function(){
       $(".imgCrsl ul").animate({"margin-left":"-100%"}, 600, function(){
          $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
       });
    }, 3500);
});



// Scroll to the top!

$(".scrollTop").click(function(){
  $("html").animate({scrollTop: 0}, "slow");
});


// Scroll to somethong !
$(".sthgArrow").click(function(){
  $("html").animate({scrollTop: 653}, "slow");
});



// Dev name slide:

function traitement1(){
  $(".devName").animate({"opacity": "1", "left": "+=6vw"}, 400);
}
function traitement2(){
  $(".devName").animate({"opacity": "0", "left": "-=6vw"}, 400);
}
$(".dev").on({mouseenter:traitement1, mouseleave:traitement2});



// Carrousel manuel:

$("click1").click(function(){



});
