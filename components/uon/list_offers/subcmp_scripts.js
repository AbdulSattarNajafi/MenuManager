/**
 * Sub component specific script
 */

//Load breakfast menu by default
//load_module('addtotable_placeholder', 'regular_menu/breakfast_menu/mod_addto_table');
//load_module('results_table_placeholder', 'regular_menu/breakfast_menu/mod_results_table');

load_module('create-add-images','create_offer/create_offer/mod_createoffer_imageselect');

//UON Lists
$('.list-links .list-links-item').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('.list-links .list-links-item').removeClass('selected');
  $('.list-links .list-links-item').addClass('disselect');
  $(this).addClass('selected'); 
  $(this).removeClass('disselected');
});

//Slider
$(document).ready(function(){
  $(' .owl-carousel').owlCarousel({
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
  