/**
 * Sub component specific script
 */

//Load breakfast menu by default
//load_module('addtotable_placeholder', 'regular_menu/breakfast_menu/mod_addto_table');
//load_module('results_table_placeholder', 'regular_menu/breakfast_menu/mod_results_table');
$('.date input').datetimepicker({
  format : "DD MMM YY           HH:mm",
});

//Right lists Links
$('.list-links .left_lists').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('.list-links .left_lists').removeClass('selected');
  $('.list-links .left_lists').addClass('disselect');
  $(this).addClass('selected'); 
  $(this).removeClass('disselected');
});

function activateDeactivate() {
  const activateBtn = document.querySelector('.activate-btn');
  const activateContainer = document.querySelector('.activate-toggle');

  const leftLists = document.querySelectorAll('.left_lists');
  const rightLists = document.querySelectorAll('.right_lists');
  
  activateBtn.addEventListener('click', () =>{
    activateContainer.classList.add('active-toggle')
    activateBtn.textContent = 'Activate';
    if(leftLists[0].classList.contains('selected')){
      rightLists[0].classList.add('right_active')
      leftLists[0].style.display = 'none';
    }
  })
};
activateDeactivate();