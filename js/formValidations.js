$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate order Form
    $(function() {
        $('#orderForm').validate({
            rules: {
                fname: {
                    required: true,
                    minlength: 2
                },
                lname: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 9
                },
                email: {
                    required: true,
                    email: true
                },
                address: {
                    required: true,
                    minlength: 5
                },
                
            },
            messages: {
                fname: {
                    required: "Kindly input your firstname",
                    minlength: "your name must consist of at least 2 characters"
                },
                phone: {
                    required: "come on!, you have a number, don't you?",
                    minlength: "your Number must consist of at least 9 characters"
                },
                email: {
                    required: "input your email, so we can contact you",
                },
                address: {
                    required: "A detailed location address is required for delivery",
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type: $('#orderForm').attr('method'),
                    data: $(form).serialize(),
                    url: $('#orderForm').attr('action'),
                    success: function() {
                        $('#orderForm :input').attr('disabled', 'disabled');
                        $('#orderForm').fadeTo( "slow", 1, function() {
                            $('#orderSucessModal').fadeIn()
                            $('.modal').modal('hide');
		                	$('#orderSucessModal').modal('show');
                        })
                        console.log('Submission occured perfectly');
                    },
                    error: function() {
                        $('#orderForm').fadeTo( "slow", 1, function() {
                            $('#orderFailedModal').fadeIn()
                            $('.modal').modal('hide');
		                	$('#orderFailedModal').modal('show');
                        })
                        console.log('An Error occured woefully');
                    }
                })
            }
        })
 

    });
        
 })(jQuery)
});