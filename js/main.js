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
  
    $('.shop-section-slider, .recipe-section-slider').owlCarousel({
      items: 1,
      margin: 15,
      loop: false,
      dots: true,
      autoplay: false,
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


    $('.single-recipe-slider').owlCarousel({
      items: 3,
      margin: 20,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3500, 
      smartSpeed: 1000,
      // center: true,
      nav: false,
      navText: ['<div class="arrow-back"><i class="fa fa-arrow-circle-left"></i</div>', '<div class="arrow-back"><i class="fa fa-arrow-circle-right"></i></div>'],
      responsive: {
          0: {
              items: 1
          },
          500: {
              items:3
          },
          1024: {
            items: 5,
            nav: true
        },
       
      }
  });

    // Single page button 

    let addBtn = document.querySelector('#add');
    let subBtn = document.querySelector('#sub');
    let qtyBox = document.querySelector('#qtyBox');

    // console.log(addBtn, subBtn, qtyBox);

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
      //Web Share Api Button
      const shareDialog = document.querySelector('.share-dialog');
      const closeButton = document.querySelector('.close-button');
      const penUrl = document.querySelector('.pen-url');

      closeButton.addEventListener('click', event => {
        shareDialog.classList.remove('is-open');
      });

      penUrl.innerHTML = window.document.location.href;

      const title = window.document.title;
      const url = window.document.location.href;

      document.querySelectorAll('.share-button').forEach(item => {
        item.addEventListener('click', Event => {
          if (navigator.share) {
            navigator.share({
              title: `${title} `,
              url: `${url}`,
            }).then(() => {
            console.log('Thanks for sharing our awesome recipe!');
            })
            .catch(console.error);
          }
          else {
            shareDialog.classList.add('is-open');
          }
        });
      });

})(jQuery);	