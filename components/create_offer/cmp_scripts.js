 load_sub_component('create_offer','list_offers');

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