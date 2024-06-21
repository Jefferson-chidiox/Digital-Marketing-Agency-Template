$(document).ready(function(){
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots: false,
        smartSpeed:1000,
        autoplay: true,
        autoplayTimeout: 7000,  
        navText : ['PREV', 'NEXT'],
        responsive:{
             0:{
                nav:false
            },
            768:{
                nav:true
            }
        }

    })

    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: true,
        smartSpeed:1000,
        autoplay: true,
        autoplayTimeout: 6000,
        margin:24,
        responsive:{
             0:{
                items:1,
                nav:false,
                margin:0,
            },
            768:{
                items:2,
            },
            1140:{
                items:2,
                center:true,
            }
        }

    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
        smartSpeed:800
    })
});
