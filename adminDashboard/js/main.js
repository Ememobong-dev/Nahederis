(function($) {

"use strict";

   var fullHeight = function() {

       $('.js-fullheight').css('height', $(window).height());
       $(window).resize(function(){
           $('.js-fullheight').css('height', $(window).height());
       });

   };fullHeight();
   
  var burgerMenu = function() {
        $('.dasboard-nav-toggle').on('click', function(event){
            event.preventDefault();
            var $this = $(this);

            if ($('body').hasClass('offcanvas')) {
                $this.removeClass('active');
                $('body').removeClass('offcanvas');	
            } else {
                $this.addClass('active');
                $('body').addClass('offcanvas');	
            }
        });
   };burgerMenu();

   // Click outside of offcanvass
   var mobileMenuOutsideClick = function() {
       $(document).click(function (e) {
            var container = $("#dashboard-aside, .dasboard-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {

                if ( $('body').hasClass('offcanvas') ) {

                    $('body').removeClass('offcanvas');
                    $('.dasboard-nav-toggle').removeClass('active');
                }
            }
       });
   }; mobileMenuOutsideClick();
  

   
    // Dashboard carousels
    $('.recipeDashboard__slider, .productDashboard__slider').owlCarousel({
    items: 1,
    margin: 3,
    loop: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 2500,
    pauseOnHover: true,
    smartSpeed: 1000,
    nav: false,
    navText: ['<p>Prev</p> ', '<p>Next</p>']
    });
  
    //  recipe Add step
    var num = 2;
    document.getElementById('addStep').addEventListener("click",addInput);
    function addInput(){
    var newInput = '<div class="form-group"> <span class="trash_step"><i class="fa fa-trash" aria-hidden="true"></i> </span><textarea class="form-control" name="input'+num+'" id="" rows="3" placeholder= "Add Step" ></textarea></div>';
    document.getElementById('newSteps').innerHTML += newInput;  
    num++;
    }

})(jQuery);






