
$(document).ready(function () {

    $('button').click(
            function () {
                $('.nav').animate({
                    top: "0px"
                }, 500, function () {
                    // Animation complete, do something.
                });
            }
    );
});



