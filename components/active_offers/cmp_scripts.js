 load_sub_component('active_offers','list_offers');

 $('.bordered_nav button').unbind('click').click(function(e) {
  e.stopPropagation();

  $('.bordered_nav .btn').removeClass('btn-primary');
  $('.bordered_nav .btn').addClass('btn-light');
  $(this).addClass('btn-primary'); 
  $(this).removeClass('btn-light');
});