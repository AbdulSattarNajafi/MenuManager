$('.list-links .list-links-item').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('.list-links .list-links-item').removeClass('selected');
  $('.list-links .list-links-item').addClass('disselect');
  $(this).addClass('selected'); 
  $(this).removeClass('disselected');
});