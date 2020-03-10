import "./main.scss";

import "./js/responsive.js";
import "./js/image-background";

$('.header-menu__icon').on('click', function () {

    const body =  $('body');
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');

    if ($(this).hasClass('active')){{
        body.data('scroll', $(window).scrollTop());
    }}
    body.toggleClass('lock');

    if (!$(this).hasClass('active')){{
        $('body,html').scrollTop(parseInt(body.data('scroll')));
    }}
})
