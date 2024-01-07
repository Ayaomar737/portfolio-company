$(function (){

    'use strict';

    // landing
    $('.carousel').hover(function () {
        $('.prev-icon').css("display","block");
    });
    $('.carousel').mouseleave(function () {
        $('.prev-icon').css("display","none");
    });

     // search navbar

     $('.navbar-nav .search').click(function (){
        $('.search-card').addClass('click-search');
    });

    $('.search-card .close').click(function (){
        $('.search-card').removeClass('click-search');
    });


    // products carousel

    $(".products .owl-carousel").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 4,
        nav: true,
        loop: true,
        dots: false,
        responsive: {
            0 : {
                items: 1
            },
            485 : {
                items: 2
            },
            728 : {
                items: 3
            },
            1200 : {
                items: 4
            }
        }
    });

// heart button

$('.button-heart').click(function(){
    $(this).toggleClass('active');
});

// menufacture

$(".menufacture .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 5,
    nav: true,
    loop: true,
    dots: false,
    responsive: {
        0 : {
            items: 1
        },
        485 : {
            items: 2
        },
        728 : {
            items: 3
        },
        1200 : {
            items: 5
        }
    }
});

// scroll to top

$(window).scroll(function () {
    if ($(window).scrollTop() >= 700) {
        $('.scroll-top').fadeIn(400);
    }else{
        $('.scroll-top').fadeOut(400);
    }
});
$('.scroll-top').click(function () {
    
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// slick

$('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.small-slider'
  });
  $('.small-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.main-slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });

});
