/**
 * Sub component specific script
 */

//Load breakfast menu by default
//load_module('addtotable_placeholder', 'regular_menu/breakfast_menu/mod_addto_table');
//load_module('results_table_placeholder', 'regular_menu/breakfast_menu/mod_results_table');

load_module('create-add-images','create_offer/create_offer/mod_createoffer_imageselect');
  
  $('.date input').datetimepicker({
    format : "DD MMM YY           HH:mm",
  });

//Lis links  
$('.list-links .list-links-item').unbind('click').click(function(e) {
    e.stopPropagation();
    
    $('.list-links .list-links-item').removeClass('selected');
    $('.list-links .list-links-item').addClass('disselect');
    $(this).addClass('selected'); 
    $(this).removeClass('disselected');
});