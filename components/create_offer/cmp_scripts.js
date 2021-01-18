 load_sub_component('create_offer','list_offers');

 //Sub Header Buttons
//First button
$('.bordered_nav .offer_btn').click(function() {
  $('.bordered_nav .offer_btn').removeClass('btn-secondary');
  $('.bordered_nav .offer_btn').addClass('orange-btn');
  
  $('.bordered_nav .second_btn').removeClass('pink-btn');
  $('.bordered_nav .second_btn').addClass('btn-light');

  $('.bordered_nav .hour_btn').addClass('btn-light');
  $('.bordered_nav .hour_btn').removeClass('yellow-btn');
});
//Second button
$('.bordered_nav .daily_btn').click(function() {
  $('.bordered_nav .daily_btn').removeClass('btn-light');
  $('.bordered_nav .daily_btn').addClass('pink-btn');

  $('.bordered_nav .offer_btn').addClass('btn-light');
  $('.bordered_nav .offer_btn').removeClass('orange-btn');
  
  $('.bordered_nav .hour_btn').addClass('btn-light');
  $('.bordered_nav .hour_btn').removeClass('yellow-btn');
});
//Third button
$('.bordered_nav .hour_btn').click(function() {
  $('.bordered_nav .hour_btn').removeClass('btn-light');
  $('.bordered_nav .hour_btn').addClass('yellow-btn');

  $('.bordered_nav .offer_btn').addClass('btn-light');
  $('.bordered_nav .offer_btn').removeClass('orange-btn');

  $('.bordered_nav .daily_btn').removeClass('pink-btn');
  $('.bordered_nav .daily_btn').addClass('btn-light');
});

//Slider
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    autoWidht:true,
    loop:false,
    rtl:true,
    nav:true,
    dots:false,
    items:7,
    margin:4,
  });
   $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
   $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
});