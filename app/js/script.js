$(document).ready(function () {
  var owl = $('.slider_inside_design');
  owl.owlCarousel();
  // Go to the next item
  $('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  });
  owl.owlCarousel({
    center: false,
    slideTransition: 'linear',
    slideSpeed: 700,
    autoPlay: 2500,
    smartSpeed:700,
    items: 3,
    loop: true,
    margin: 0,
    nav: true,
    info: true,
    onTranslate: callback,
    dots: false,
    responsive: {
      0: {
        items: 1,
        center: false,
        autoplay: false,
        autoplaySpeed: 900,
        autoplayTimeout: 2000,
        nav: true,
      },
      1000: {
        items: 3,
        center: false,
        autoplay: false,
        autoplaySpeed: 900,
        autoplayTimeout: 2000,
        nav: true,
      },
    }
  });
  $('.mobile_menu').click(function(event) {
    $('.main_menu').toggleClass('active');
    $(this).toggleClass('active');
  });
  owl.on('changed.owl.carousel', function(event) {
  callback(event);
  });
  let owl2 = $('.designers_slider');
  owl2.owlCarousel({
    items: 1,
  });

});
function callback(event) {
  let itemsASD     = event.item.count;
  let itemADS     = event.item.index;
  let current = $('.count .current');
  let all = $('.count .all');
  // console.log(itemsASD);
  // console.log(itemADS);
  current.html('0'+itemADS);
  all.html('0'+itemsASD);
}

