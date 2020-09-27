$(document).ready(function () {
    $('.ask').click(function (e) {
        $('.fa-plus').attr('style', '');
        if (!$(this).next().hasClass('open')) {
            $('.answer').slideUp();
            $(this).next().slideDown(200);
            $('.answer').removeClass('open');
            $(this).next().addClass('open');
            $(this).find('.fa-plus').css("display", "none");
            
        } else {
            $('.answer').slideUp();
            $('.answer').removeClass('open');
            $(this).find('.fa-plus').css("display", "inline-block");
        }
    })
})






