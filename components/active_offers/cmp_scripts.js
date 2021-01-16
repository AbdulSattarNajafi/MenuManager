 load_sub_component('active_offers','list_offers');



//First button
  $('.bordered_nav .firs_btn').click(function() {
    $('.bordered_nav .firs_btn').removeClass('btn-light');
    $('.bordered_nav .firs_btn').addClass('orange-btn');
    
    $('.bordered_nav .sec_btn').removeClass('pink-btn');
    $('.bordered_nav .sec_btn').addClass('btn-light');

    $('.bordered_nav .thir_btn').addClass('btn-light');
    $('.bordered_nav .thir_btn').removeClass('yellow-btn');
  });
//Second button
  $('.bordered_nav .sec_btn').click(function() {
    $('.bordered_nav .sec_btn').removeClass('btn-light');
    $('.bordered_nav .sec_btn').addClass('pink-btn');

    $('.bordered_nav .firs_btn').addClass('btn-light');
    $('.bordered_nav .firs_btn').removeClass('orange-btn');
    
    $('.bordered_nav .thir_btn').addClass('btn-light');
    $('.bordered_nav .thir_btn').removeClass('yellow-btn');
  });
//Third button
  $('.bordered_nav .thir_btn').click(function() {
    $('.bordered_nav .thir_btn').removeClass('btn-light');
    $('.bordered_nav .thir_btn').addClass('yellow-btn');

    $('.bordered_nav .firs_btn').addClass('btn-light');
    $('.bordered_nav .firs_btn').removeClass('orange-btn');

    $('.bordered_nav .sec_btn').removeClass('pink-btn');
    $('.bordered_nav .sec_btn').addClass('btn-light');
  });

//Slider
var owl = $('#subnav-slide-btns .btns-slider-container');
owl.owlCarousel({
  rtl:true,
  autoWidth:true,
  items:5,
  center:true,
  URLhashListener:true,
  autoplayHoverPause:true,
  startPosition: 'URLHash'
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
