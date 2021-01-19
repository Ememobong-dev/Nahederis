(function($) {
    "use strict";

    $(document).on('click', '.newMessage-list .newMessage-box', function(){
        $(this).addClass('active').siblings().removeClass('active')
        
        var inboxView = $("#Inboxes.Inboxes-view");
        var inboxDefault = $("#Inboxes.Inboxes--default");
        
        if ($('.newMessage-box').hasClass('active')) {
            inboxView.addClass('active')
            inboxDefault.addClass('remove')
        }
         else {
           console.log("Error!")	
        }

    })

})(jQuery);