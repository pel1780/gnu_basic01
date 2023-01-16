$(function () {
    $('.main_slider').slick({

    });

    $('.m_link li a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.main_slider').slick('slickGoTo', idx);
    })
})