
$(document).ready(function(){

$("nav, .dev").slideDown(800);
$(".scrollTop").hide();


//Vanish/show nav and scroll to the top!:

$(window).scroll(function(){
	posScroll = $(document).scrollTop();
	if(posScroll >= $(".title").offset().top){
		$('.dev').slideUp(200);
		$('nav').stop().animate({"height": "8vh"}, 200);
    $(".scrollTop").fadeIn(200);
  }
	else{
		$('.dev').slideDown(200);
		$('nav').stop().animate({"height": "14vh"}, 200);
    $(".scrollTop").fadeOut(200);
  }

});



//A propos de moi moi show:

$(".mymy").hide();

$(window).scroll(function(){
	posScroll = $(document).scrollTop();
	if(posScroll >= $(".carrousel").offset().top){
    $('.mymy').fadeIn(600);
  }
	else{
    $('.mymy').fadeOut(400);
  }
});



// Title slide:
if ($("html").width() >= 981) {
	$(".title").animate({marginLeft: "+=128vw"}, 900);
}
else if (361 <= $("html").width() <= 980) {
	$(".title").animate({marginLeft: "+=108.5vw"}, 900);
}
else if ($("html").width() <= 360) {
	$(".title").animate({marginLeft: "+=110vw"}, 900);
}




// Définition du scroll:

  // var stp = $("html").scrollTop();
  // $("footer").append("<p>Scrolltop:" + stp + "</p>");



// Carrousel automatique:
    setInterval(function(){
       $(".imgCrsl ul").animate({"margin-left":"-100%"}, 600, function(){
          $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
       });
    }, 3500);
});



// Scroll to the top!

$(".scrollTop").click(function(){
	if ($(document).scrollTop() !== 0) {
		$("html, body").animate({scrollTop: 0}, "slow");
	}

});


// Scroll to something !
$("#apropos").click(function(){
  $("html, body").animate({scrollTop: $(".sthg").offset().top}, "slow");
});



// Scroll to technos !

$("#technos").click(function(){
  $("html, body").animate({scrollTop: $(".technos").offset().top}, "slow");
});



// Dev name slide:

function traitement1(){
	if ($("html").width() >= 981) {
		$(".devName").animate({"opacity": "1", "left": "+=6vw"}, 400);
	}
	else if (361 <= $("html").width() <= 980) {
		$(".devName").animate({"opacity": "1", "left": "+=30vw"}, 400);
	}
	else if ($("html").width() <= 360) {
		$(".devName").animate({"opacity": "1", "left": "+=30vw"}, 400);
	}

}
function traitement2(){
	if ($("html").width() >= 981) {
		$(".devName").animate({"opacity": "0", "left": "-=6vw"}, 400);
	}
	else if (361 <= $("html").width() <= 980) {
		$(".devName").animate({"opacity": "0", "left": "-=30vw"}, 400);
	}
	else if ($("html").width() <= 360) {
		$(".devName").animate({"opacity": "0", "left": "-=30vw"}, 400);
	}
}
$(".dev").on({mouseenter:traitement1, mouseleave:traitement2});



// Carrousel manuel:

$("click1").click(function(){



});
