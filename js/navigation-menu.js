var main = function() {
    $('.d-link').click(function() {
        $('.d-menu').toggle();
    })
    $('.d-menu').hide();
}

$(document).ready(main);
