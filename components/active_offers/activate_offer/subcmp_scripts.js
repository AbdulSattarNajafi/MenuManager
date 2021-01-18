/**
 * Sub component specific script
 */

//Load breakfast menu by default
//load_module('addtotable_placeholder', 'regular_menu/breakfast_menu/mod_addto_table');
//load_module('results_table_placeholder', 'regular_menu/breakfast_menu/mod_results_table');
$('.date input').datetimepicker({
  format : "DD MMM YY           HH:mm",
});

//Left lists Links
$('.list-links .left_lists').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('.list-links .left_lists').removeClass('selected');
  $('.list-links .left_lists').addClass('disselect');
  $(this).addClass('selected'); 
  $(this).removeClass('disselected');
});
//Activate and Deactive Button
function activate() {
  const activateBtn = document.querySelector('.activate-btn');
  const deactivateBtn = document.querySelector('.deactivet-btn');
  const leftLists = document.querySelectorAll('.left_lists');
  const rightLists = document.querySelectorAll('.right_lists');
  
  activateBtn.addEventListener('click', () =>{
    rightLists[0].classList.add('right_active');
    leftLists[0].classList.add('left_active');
    activateBtn.style.display = 'none';
    deactivateBtn.style.display = 'block';
  });

  deactivateBtn.addEventListener('click', () => {
    rightLists[0].classList.remove('right_active');
    leftLists[0].classList.remove('left_active');
    activateBtn.style.display = 'block';
    deactivateBtn.style.display = 'none';
  });

};
activate();
//Eye Active and Deactive
function eyeActive() {
  const eyebtn = document.querySelector('.eye-btn');
  const eyeOn = document.querySelector('.eye-on');
  const eyeOff = document.querySelector('.eye-off');
  eyebtn.addEventListener('click', () => {
    eyebtn.classList.toggle('eye-deactive')
    eyeOn.classList.toggle('eye-on-deactive');
    eyeOff.classList.toggle('eye-off-active')
  })
}
eyeActive();