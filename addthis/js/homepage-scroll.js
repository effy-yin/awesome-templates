$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 1100) {
        $('.share-buttons svg').addClass('active');
    }
    if (scroll >= 2300) {
        $('.follow-buttons svg').addClass('active');
    }
    if (scroll >= 4100) {
        $('.related-posts svg').addClass('active');
    }
    if (scroll >= 5700) {
        $('.email-collection svg').addClass('active');
    }
    if (scroll >= 7500) {
        $('.link-promotion svg').addClass('active');
    }
});