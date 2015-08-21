
$(document).ready(function () {

    $('.icon-menu').click(
            function () {
                $('.nav').animate({
                    top: "0px"
                }, 500, function () {
                    // Animation complete, do something.
                });
            }
    );
    //$('body').animate({top: '285px'}, 200);
    $('.fa-angle-up').click(
            function () {
                $('.nav').animate({
                    top: "-100%"
                }, 500, function () {
                    // Animation complete, do something.
                });
            }
    );
});



