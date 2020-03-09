function adaptive_header(w) {
    const headerMenu = $('.header-menu');
    const headerLang = $('.header-top-lang');
    const headerBottomMenu = $('.header-bottom-menu');

    if (w < 767) {
        if (!headerLang.hasClass('done')) {
            headerLang.addClass('done').appendTo(headerMenu);
        }
    } else {
        if (headerLang.hasClass('done')) {
            headerLang.removeClass('done').appendTo($('.header-top'));
        }
    }

    if (w < 767) {
        if (!headerBottomMenu.hasClass('done')) {
            headerBottomMenu.addClass('done').appendTo(headerMenu);
        }
    } else {
        $.each(headerBottomMenu, function () {
            if ($(this).hasClass('header-bottom-menu--right')) {
                if ($(this).hasClass('done')) {
                    $(this).removeClass('done').prependTo($('.header-bottom__column').eq(2))
                }
            } else {
                if ($(this).hasClass('done')) {
                    $(this).removeClass('done').prependTo($('.header-bottom__column').eq(0))
                }
            }
        })
    }
}

function adaptive_function() {
    const w = $(window).outerWidth();
    const h = $(window).outerHeight();
    adaptive_header(w, h)
}

$(window).on('resize', function () {
    adaptive_function();
})

adaptive_function();
