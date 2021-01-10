/**
 * Sub component specific script
 */

//Load breakfast menu by default
//load_module('addtotable_placeholder', 'regular_menu/breakfast_menu/mod_addto_table');
//load_module('results_table_placeholder', 'regular_menu/breakfast_menu/mod_results_table');

load_module('create-add-images','create_offer/create_offer/mod_createoffer_imageselect');
  load_module('modal_additions','regular_menu/breakfast_menu/mod_select_additions');

  $('#create_button_row button').click(function(){
    $('#create_button_row button').removeClass('btn-secondary');
    $('#create_button_row button').addClass('btn-light');
    $(this).removeClass('btn-light');
    $(this).addClass('btn-secondary');

    if($(this).attr('id')=='btn_createoffer_edit'){
      $('#create_filldata_data').css('outline','solid 4px #e00');
    }else{
      $('#create_filldata_data').css('outline','none');
    }
  }); //
  