$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:false,
        slidesToShow:1,
        slidesToScroll:1,
        speed:500,
        easing:'ease',
        infinite:true,
        touchThreshold:10,
        centerMode:false,
        responsive:[
            {
                breakpoint: 760,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:3,
                    centerMode:true,
                    arrows:false,
                    speed:500,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow:1,
                    centerMode:false,
                    slidesToScroll:1,
                    arrows:true
                }
            },
            {
                breakpoint:1400,
                settings: {
                    slidesToShow:3,
                    arrows:true,
                }
            },
            {
                breakpoint:2000,
                settings: {
                    slidesToShow:5,
                    slidesToScroll:3,
                }
            }
        ],
        mobileFirst:true,       
    });
});