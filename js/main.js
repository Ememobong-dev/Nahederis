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
var owl = $('.owl-carousel');
  owl.owlCarousel({
  items: 1,
  margin: 0,
  loop: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5500, // Autoplay Timeout 1s = 1000ms
  smartSpeed: 1000,
  nav: false,
  navText: ['Prev', 'Next']
});

// custom Button carousel
$('.customNextBtn').click(function() {
  owl.trigger('next.owl.carousel');
});
$('.customPrevBtn').click(function() {
  owl.trigger('prev.owl.carousel');
});




// Grid container
$('#photos-container').masonry({
      itemSelector:'.item',
      columnWidth:70
    });

  
});







})(jQuery);	