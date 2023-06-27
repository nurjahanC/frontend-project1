
$(function () {

  // Slick slider star
  $('.service_slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    // Extra small start
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      // Extra small end
      
      // Extra small star
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          
        }
      }
      // Extra small end
      
      
    ]     
    });
  // Slick slider end

  // MixitUP start
  var containerEl = document.querySelector('.mixit_plug');

  var mixer = mixitup(containerEl);
  // MixitUP end



  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


  //==== Back-to-top button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200)
    } else {
      $('.back-to-top').fadeOut(200)
    }
  });
  //==== Animate the scroll to top
  $('.back-to-top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0,
    }, 1000);
  });

  //  Stykey Header  
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 200) {
      $('.navbar').addClass('sticky_name');
    }
    else {
      $('.navbar').removeClass('sticky_name');
    }
  });



})

