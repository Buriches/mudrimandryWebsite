jQuery(document).ready(($)=>{
    $('.kolonka').lightGallery({

    });
    $('.slider-item').lightGallery({

    });
    // if (screen.width >= 500) {
    //     $('.slider-wrapper').height($('.kolonka__wrap').height())
    // }
    $('.kolonka__wrap').height($('.kolonka__wrap').width()/3);
    $('.carousel').height($('.carousel').width()/3);
    $('.photo').height($('.kolonka').height()/2 - window.innerWidth/100*0.625);
    $('.photo').css({marginBottom: window.innerWidth/100*1.25})
    $('.programs__img').height($('.programs__img').width()/3.5);

    if (pageYOffset > document.documentElement.clientHeight / 3 * 2){
        header.classList.add('header_active');
    }else {
        header.classList.remove('header_active');
    }
    window.addEventListener('scroll', function() {
        if (pageYOffset > document.documentElement.clientHeight / 3 * 2){
            header.classList.add('header_active');
        }else {
            header.classList.remove('header_active');
        }
    });
    $('#map').height($('#map').width()/1.461758502);
    $('.map__item').height($('#map').height()/13.9);
    $('.map__item').width($('.map__item').height()*0.78);
});
jQuery(document).resize(function (){
    $('.kolonka__wrap').height($('.kolonka__wrap').width()/3);
    $('.carousel').height($('.carousel').width()/3);
    $('.photo').height($('.kolonka').height()/2 - window.innerWidth/100*0.625);
    $('.photo').css({marginBottom: window.innerWidth/100*1.25})
    $('#map').height($('#map').width()/1.461758502);
    $('.map__item').height($('#map').height()/13.9);
    $('.map__item').width($('.map__item').height());
})

$('.about__more').click(function (){
    var height = window.innerHeight;
    window.scrollTo(0, height);
})
$(document).on("click", ".menu__item a", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top - 50}, 200); // плавно переходим к блоку
});
$(document).on("click", ".to-the-tour", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top - 50}, 200); // плавно переходим к блоку
});

$('.play').click(function (){
    $('.video').fadeIn(200)
    $('html').css({overflow: 'hidden!important'});
})





function setupsliders() {
    $(".slider-items-wrapper").each(function () {
        var sliderWrapper = $(this).closest(".slider-wrapper");
        $(this).find('.slider-item:eq(0)').addClass('current-slider-item');
        checksliderNavigation(sliderWrapper);
    });
}

function checksliderNavigation(sliderWrapper) {
    var itemsWrapper = sliderWrapper.find(".slider-items-wrapper");
    var currentSlide = itemsWrapper.find(".current-slider-item").index();
    var slidesQuantity = sliderWrapper.find('.slider-item').length - 1;

    var sliderParent = sliderWrapper.closest(".slider-with-navigation"); // ЕСЛИ ЕСТЬ ТОЧКИ
    sliderParent.find('.slider-dots-item').removeClass('active') // ЕСЛИ ЕСТЬ ТОЧКИ
    sliderParent.find('.slider-dots-item:eq('+ currentSlide +')').addClass('active') // ЕСЛИ ЕСТЬ ТОЧКИ

    itemsWrapper.css({"transform":"translateX(-"+ currentSlide * 100 +"%)"});
    if (currentSlide < slidesQuantity)
        sliderWrapper.find(".slider-navigation.next-item").addClass("active").removeClass("disable");
    else
        sliderWrapper.find(".slider-navigation.next-item").addClass("disable").removeClass("active");
    if (currentSlide > 0)
        sliderWrapper.find(".slider-navigation.previous-item").addClass("active").removeClass("disable");
    else
        sliderWrapper.find(".slider-navigation.previous-item").addClass("disable").removeClass("active");
}
// CAROUSEL

setupsliders();
$('.slider-wrapper').on('click', '.slider-navigation.active', function (e) {
    e.preventDefault();
    var itemsWrapper = $(this).parent(".slider-wrapper").find(".slider-items-wrapper");
    var currentSlide = itemsWrapper.find('.current-slider-item').index();
    var slidesQuantity = itemsWrapper.find('.slider-item').length - 1;
    if ($(this).hasClass('next-item')) {
        if (currentSlide < slidesQuantity) {
            currentSlide++;
            itemsWrapper.find('.current-slider-item').removeClass('current-slider-item');
            itemsWrapper.find('.slider-item:eq('+ currentSlide +')').addClass('current-slider-item');
        }
    }
    else if ($(this).hasClass('previous-item')) {
        if (currentSlide > 0) {
            currentSlide--;
            itemsWrapper.find('.current-slider-item').removeClass('current-slider-item');
            itemsWrapper.find('.slider-item:eq('+ currentSlide +')').addClass('current-slider-item');
        }
    }
    checksliderNavigation(itemsWrapper.closest(".slider-wrapper"));
});
// CAROUSEL