
function allergensAccordion() {
  const allergenContainer = document.querySelector('.allergens_container');
const allergenBtn = document.querySelector('#algen_btn');
allergenBtn.addEventListener('click', () => {
  allergenContainer.classList.toggle('show_allergens');
});
};
allergensAccordion();