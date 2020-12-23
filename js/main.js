(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});





$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};


// Shop top product
// var owl = $('.owl-carousel');
//   owl.owlCarousel({
//   items: 1,
//   margin: 0,
//   loop: true,
//   dots: true,
//   autoplay: true,
//   autoplayTimeout: 5500,
//   smartSpeed: 1000,
//   nav: true,
//   navText: ['<p>Prev</p> ', '<p>Next</p>']
// });

 
$('.world-catagory-slider2').owlCarousel({
    items: 1,
    margin: 3,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5500,
    smartSpeed: 1000,
    nav: true,
    navText: ['<p>Prev</p> ', '<p>Next</p>']
  });

// Recipe carousel

  $('.recipe-carousel').owlCarousel({
    items: 1,
    margin: 5,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5500,
    smartSpeed: 1000,
    nav: false,
    navText: ['<p>Prev</p> ', '<p>Next</p>']
  });


});







})(jQuery);	