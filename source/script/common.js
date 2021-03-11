$(document).ready(function(){

    $('.catalog-menu__menu li').click(function () {
        $('.catalog-menu__menu li').css('padding-bottom', '22px');
        $(".catalog-menu__menu ul:visible").slideUp();
        $('.catalog-menu__menu img').removeClass('active-arrow');
        if (!$(this).next().is(":visible")) {
            $(this).css('padding-bottom', '0');
            $(this).next().slideDown(200);
            $(this).find('img').addClass('active-arrow');
        }
    });

    $('.burger').click(function(){
        $(this).toggleClass('open');
        $('.catalog-menu').toggleClass('open');
    });
});

