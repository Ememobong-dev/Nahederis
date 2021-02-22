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

//    $('.dashboard-nav li a').click(function(e){

//         $('.dashboard-nav li.active').removeClass('active');

//         var $parent = $(this).parent();
//         $parent.addClass('active');
//         e.preventDefault();
//    });

   $(function() {
       var current = location.pathname;
        $('.dashboard-nav li a').each(function() {
            var $this = $(this);
            if($this.attr('href').indexOf(current) !== -1) {
                $('.dashboard-nav li.active').removeClass('active');
                var $parent = $('.dashboard-nav li.active').parent();
                    $parent.addClass('active');
                // $this.addClass('active');
            }
        });
   });

    //  recipe Add step
    var num = 2;
    document.getElementById('addStep').addEventListener("click",addInput);
    function addInput(){
    var newInput = '<div class="form-group"> <span class="trash_step"><i class="fa fa-trash" aria-hidden="true"></i> </span><textarea class="form-control" name="input'+num+'" id="" rows="3" placeholder= "Add Step" ></textarea></div>';
    document.getElementById('newSteps').innerHTML += newInput;  
    num++;
    }

   var addIngr = document.querySelector('#addIngredient');
   console.log(addIngr.value)

})(jQuery);






