/**
 * Sub component specific script
 */

//Load breakfast menu by default
load_module('addtotable_placeholder', 'regular_menu/breakfast_menu/mod_addto_table');
load_module('results_table_placeholder', 'regular_menu/breakfast_menu/mod_results_table');

$('#day_nav #pizza').click(function() {
  $('#day_nav #pizza').removeClass('btn-light');
  $('#day_nav #pizza').addClass('btn-primary');
  $('#day_nav #kebab').removeClass('btn-primary');
  $('#day_nav #kebab').addClass('btn-light');
  $('#day_nav #burgers').addClass('btn-light');
  $('#day_nav #burgers').removeClass('btn-primary');
  $('#meals-menu #menu-desc-btn').text('Pizza');
});
$('#day_nav #kebab').click(function() {
  $('#day_nav #kebab').removeClass('btn-light');
  $('#day_nav #kebab').addClass('btn-primary');
  $('#day_nav #pizza').removeClass('btn-primary');
  $('#day_nav #pizza').addClass('btn-light');
  $('#day_nav #burgers').addClass('btn-light');
  $('#day_nav #burgers').removeClass('btn-primary'); 
  $('#meals-menu #menu-desc-btn').text('Kebabs');
});
$('#day_nav #burgers').click(function() {
  $('#day_nav #burgers').removeClass('btn-light');
  $('#day_nav #burgers').addClass('btn-primary');
  $('#day_nav #pizza').removeClass('btn-primary');
  $('#day_nav #pizza').addClass('btn-light');
  $('#day_nav #kebab').removeClass('btn-primary');
  $('#day_nav #kebab').addClass('btn-light');
  $('#meals-menu #menu-desc-btn').text('Burgers');
});
