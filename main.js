$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        speed: 300,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1224,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              centerMode: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              centerMode: true
            }
          },
          {
            breakpoint: 940,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              centerMode: false
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            }
          }
        ]
    });
  });
