const addModal = document.getElementById('add-modal');
// const addModal = document.querySelector('#add-modal');
// const addModal = document.body.children[1];

const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieBtn = addModal.querySelector('.modal__actions .btn--passive');
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInput = addModal.querySelectorAll('input');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
}

const toggleAddMovieModal = () => {
  addModal.classList.toggle('visible');
  toggleBackdrop();
};

const backdropClickHandler = () => {
  toggleAddMovieModal();
};
const cancelAddMovieHandler = () => {
  toggleAddMovieModal();
};

const confirmAddMovieHandler = () => {
  const titleValue = userInput[0].value;
  const imageValue = userInput[1].value;
  const ratingValue = +userInput[2].value;

  if( titleValue.trim() === '' || imageValue === '' || ratingValue === '' || ratingValue < 1 || ratingValue>5){
    alert();
    return;
  }

  console.log(titleValue, imageValue, ratingValue);
  sda ads a sda dad a
};



startAddMovieBtn.addEventListener('click', toggleAddMovieModal);
backdrop.addEventListener('click',backdropClickHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener('click', confirmAddMovieHandler);