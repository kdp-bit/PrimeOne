function imageBackground() {
    $.each($('.ibg'), function () {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")')
        }
    })
}
imageBackground();
