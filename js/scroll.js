// headerをスクロールすると、色が変わる
jQuery(window).on('scroll', function () {
    if (jQuery('.first_menu').height() < jQuery(this).scrollTop()) {
        jQuery('.header').addClass('change-color');
    } else {
        jQuery('.header').removeClass('change-color');
    }
});
