var main = function() {
    //Dropdown menu will show() if you hover over the link or the menu itself,
    //will disappear if you leave those areas.
    $('.d-link').hover(function() {
        $('.d-menu').show();
    }, function() {
        $('.d-menu').hide();    
    })
    $('.d-menu').hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();    
    })
}

$(document).ready(main);
