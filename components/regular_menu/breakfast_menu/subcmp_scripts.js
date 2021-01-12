/**
 * Sub component specific script
 */

//Load breakfast menu by default
load_module('addtotable_placeholder', 'regular_menu/breakfast_menu/mod_addto_table');
load_module('results_table_placeholder', 'regular_menu/breakfast_menu/mod_results_table');

$('#subcmp_nav #salads').click(function() {
  $('#subcmp_nav #salads').removeClass('btn-light');
  $('#subcmp_nav #salads').addClass('btn-primary');
  $('#subcmp_nav #drinks').removeClass('btn-primary');
  $('#subcmp_nav #drinks').addClass('btn-light');
  $('#meals-menu #menu-desc-btn').text('Salad');
}); 
$('#subcmp_nav #drinks').click(function() {
  $('#subcmp_nav #salads').removeClass('btn-primary');
  $('#subcmp_nav #salads').addClass('btn-light');
  $('#subcmp_nav #drinks').removeClass('btn-light');
  $('#subcmp_nav #drinks').addClass('btn-primary');
  $('#meals-menu #menu-desc-btn').text('Drinks');
});




