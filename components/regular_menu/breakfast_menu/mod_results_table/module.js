
const ingriBtn = document.querySelector('.ingri-btn');
const ingriInput = document.querySelector('.ingri-input');
ingriBtn.addEventListener('click', () => {
  ingriBtn.classList.toggle('active');
  ingriInput.classList.toggle('ingri-show');
});