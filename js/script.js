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

    document.querySelector('.left').onclick = left;
    document.querySelector('.right').onclick = right;
    var inner = document.querySelector('.carousel-inner');
    var move = 0;
    var timer;
    autoplay();

    function autoplay() {
        timer = setTimeout(left, 3000);
    }

    function left() {
        move -= 300;
        if (move < -1200) {
            move = 0;
        }
        inner.style.left = move + 'px';
        clearTimeout(timer);
        autoplay();
    }
    function right() {
        if (move == 0) {
            move = -1200;
        }
        else {
            move += 300;
        }
        inner.style.left = move + 'px';
        clearTimeout(timer);
        autoplay();
    }

})






