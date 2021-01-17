/**
 * Sub component specific script
 */

//Load breakfast menu by default
//load_module('addtotable_placeholder', 'regular_menu/breakfast_menu/mod_addto_table');
//load_module('results_table_placeholder', 'regular_menu/breakfast_menu/mod_results_table');

load_module('create-add-images','create_offer/create_offer/mod_createoffer_imageselect');

//Lis links  
$('.list-group .list-group-item').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('.list-group .list-group-item').removeClass('selected');
  $('.list-group .list-group-item').addClass('disselect');
  $(this).addClass('selected'); 
  $(this).removeClass('disselected');
});
  