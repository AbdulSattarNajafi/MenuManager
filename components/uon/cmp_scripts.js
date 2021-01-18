 load_sub_component('uon','list_offers');

//Sub Header Buttons
//First button
$('.bordered_nav .first_btn').click(function() {
  $('.bordered_nav .first_btn').removeClass('btn-light');
  $('.bordered_nav .first_btn').addClass('orange-btn');
  
  $('.bordered_nav .second_btn').removeClass('pink-btn');
  $('.bordered_nav .second_btn').addClass('btn-light');

  $('.bordered_nav .third_btn').addClass('btn-light');
  $('.bordered_nav .third_btn').removeClass('yellow-btn');
});
//Second button
$('.bordered_nav .second_btn').click(function() {
  $('.bordered_nav .second_btn').removeClass('btn-light');
  $('.bordered_nav .second_btn').addClass('pink-btn');

  $('.bordered_nav .first_btn').addClass('btn-light');
  $('.bordered_nav .first_btn').removeClass('orange-btn');
  
  $('.bordered_nav .third_btn').addClass('btn-light');
  $('.bordered_nav .third_btn').removeClass('yellow-btn');
});
//Third button
$('.bordered_nav .third_btn').click(function() {
  $('.bordered_nav .third_btn').removeClass('btn-light');
  $('.bordered_nav .third_btn').addClass('yellow-btn');

  $('.bordered_nav .first_btn').addClass('btn-light');
  $('.bordered_nav .first_btn').removeClass('orange-btn');

  $('.bordered_nav .second_btn').removeClass('pink-btn');
  $('.bordered_nav .second_btn').addClass('btn-light');
});

