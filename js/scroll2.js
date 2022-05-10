jQuery(window).on('scroll', function () {
    if (jQuery('.main-visual-r').height() < jQuery(this).scrollTop()) {
        jQuery('.header').addClass('change-color');
    } else {
        jQuery('.header').removeClass('change-color');
    }
});