(function($) {
    "use strict";

    $(document).on('click', '.newMessage-list .newMessage-box', function(){
        $(this).addClass('active').siblings().removeClass('active');
        // $('.notified').addClass('seen').siblings().addClass('notSeen');

        // $(document).on('click', '.newMessage-text i.notified', function(){
        //     $(this).addClass('seen').siblings().removeClass('seen');
    
        // })

        var inboxView = $("#Inboxes.Inboxes-view");
        var inboxDefault = $("#Inboxes.Inboxes--default");
        
        if ($('.newMessage-box').hasClass('active')) {
            inboxView.addClass('active');
            inboxDefault.addClass('remove');
        }
        else if ($('.newMessage-box').hasClass('active')) {
            $('.newMessage-text i.notified', function() {
                $('.newMessage-text i.notified').addClass('seen').siblings().removeClass('seen');
                console.log($(this))
            })
        }
         else {
           console.log("Error!")	
        }

        


    })

})(jQuery);