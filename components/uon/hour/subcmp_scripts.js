function activateOffer() {
  const activateBtn = document.querySelector('.activate-btn');
  const deactivateBtn = document.querySelector('.deactivet-btn');
  const leftLists = document.querySelectorAll('.left-lists');
  const rightLists = document.querySelectorAll('.right-lists');
  
  activateBtn.addEventListener('click', () =>{
    rightLists[0].classList.add('right_activate');
    leftLists[0].classList.add('left_activate');
    activateBtn.style.display = 'none';
    deactivateBtn.style.display = 'block';
  });

  deactivateBtn.addEventListener('click', () => {
    rightLists[0].classList.remove('right_activate');
    leftLists[0].classList.remove('left_activate');
    activateBtn.style.display = 'block';
    deactivateBtn.style.display = 'none';
  });

};
activateOffer();
//Eye Active and Deactive
function eyeActivation() {
  const eyebtn = document.querySelector('.eye-btn');
  const eyeOn = document.querySelector('.eye-on');
  const eyeOff = document.querySelector('.eye-off');
  eyebtn.addEventListener('click', () => {
    eyebtn.classList.toggle('eye-deactive')
    eyeOn.classList.toggle('eye-on-deactive');
    eyeOff.classList.toggle('eye-off-active')
  })
}
eyeActivation();