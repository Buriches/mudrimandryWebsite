$(document).ready(function() {
    $('#nav-icon1').click(function (){
        $(this).toggleClass('open');
        openBurger();
        }

    );
    $('.burger-open').slideUp(0);
    $('.mobile__menu a').click(function (){
        $('#nav-icon1').toggleClass('open');
        burgerClose();
        openBurger();
    })

    const popup = document.querySelector('.mobile__menu');

    document.onclick = function(e){
        if ( event.target.className === 'burger__line') {

        }else if(event.target.className === 'video'){
            $('.video').fadeOut(100)
            $('html').css({overflow: ''});
        }else{
            {
                $('#nav-icon1').removeClass('open');
                burgerClose();
                openBurger();
            };
        }
    };






    function openBurger() {
        if ($('#nav-icon1').hasClass('open')){
            $('.burger-open').slideDown(200);
            setTimeout(blackheader, 200);
            $('body').css({overflow: 'hidden'});
            $('.mobile-burger').css({opacity: '.9'})
            setTimeout(burgerAnimation, 400)
        }else {
            $('.burger-open').slideUp(200)
            $('#header').removeClass('header_active-super')
            $('body').css({overflow: 'unset'})
            setTimeout(burgerClose(), 200)
        }
    }
    function burgerClose(){
        $('.menu__item').removeClass('menu__item-animated')
        $('.menu__numbers-span').removeClass('activated')
    }
    function burgerAnimation(){
        setTimeout(function (){
            $('.menu__map').addClass('menu__item-animated')
        }, 0)
        setTimeout(function (){
            $('.menu__programs').addClass('menu__item-animated')
        }, 200)
        setTimeout(function (){
            $('.menu__form').addClass('menu__item-animated')
        }, 400)
        setTimeout(function (){
            $('.menu__gallery').addClass('menu__item-animated')
        }, 600)
        setTimeout(function (){
            $('.menu__numbers-span').addClass('activated')
        }, 800)
    }
    function blackheader(){
        $('#header').addClass('header_active-super')
    }
});
