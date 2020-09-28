$(document).ready(function () {
    function scrolled() {
        var scroll = $(this).scrollTop();
        $('.header-menu__link').each(function () {
            var attr = $(this).attr('href');
            var position = $(attr).offset().top - 191;
        })
    }
    $(window).on('scroll', function () {
        scrolled();
    });
    $('.header-menu__link').click(function (e) {
        e.preventDefault();
       
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('.navbar').innerHeight()
        }, 800)
    })
    $('.header-menu-brand__link').click(function (e) {
        e.preventDefault();
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('.navbar').innerHeight()
        }, 800)
    })
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


    var btn = document.querySelector('.btn-toup');
    var timer;
    btn.addEventListener('click', toTop);

    function toTop() {
        scrolled = window.pageYOffset;
        if (scrolled > 0) {
            scrolled -= 50;
            scrollTo(0, scrolled);
            timer = setTimeout(toTop, 10)
        }
    }

    window.addEventListener('scroll', function (e) {
        if (pageYOffset > 600) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });
    var text = document.querySelector('.header-left__title');
    var str = text.innerHTML;
    text.innerHTML = '';
    var count = 0;

    function print() {
        text.innerHTML += str.charAt(count);
        count++;
        if (str.length >= count) {
            clearInterval(timer);
        }
    }
    setInterval(print, 50);

})