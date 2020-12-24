(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 300) {
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
    margin: 20,
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
    margin: 15,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5500,
    smartSpeed: 1000,
    nav: false,
    navText: ['<p>Prev</p> ', '<p>Next</p>']
  });

  let addBtn = document.querySelector('#add');
  let subBtn = document.querySelector('#sub');
  let qtyBox = document.querySelector('#qtyBox');

  console.log(addBtn, subBtn, qtyBox);

  addBtn.addEventListener('click', ()=> {
    qtyBox.value = parseInt(qtyBox.value) + 1;
  });

  subBtn.addEventListener('click', ()=> {
    if (qtyBox.value <= 0) {
        qtyBox.value = 0;
    }
    else {
      qtyBox.value = parseInt(qtyBox.value) - 1;
    }
    
  });

});







})(jQuery);	