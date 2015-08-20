
$(document).ready(function () {

    $('button').click(
            function () {
                $('.nav').animate({
                    top: "0px"
                }, 200, function () {
                    // Animation complete, do something.
                });
            }
    );
    $('.fa-angle-up').click(
            function () {
                $('.nav').animate({
                    top: "-25px"
                }, 200, function () {
                    // Animation complete, do something.
                });
            }
    );
});



