// venobox
$(document).ready(function(){
    $('.venobox').venobox(); 
});

// slick slider
// $(document).ready(function(){
//     $('.testimonial_slider').slick({
        
//     });
//   });

  $('.testimonial_slider').slick({
    dots: true,
    arrows: false, 
    autoplay: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    // ]
  });