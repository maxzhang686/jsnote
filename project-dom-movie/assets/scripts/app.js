const addModal = document.getElementById("add-modal");
// const addModal = document.querySelector('#add-modal');
// const addModal = document.body.children[1];

const startAddMovieBtn = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieBtn = addModal.querySelector(
  ".modal__actions .btn--passive"
);
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = addModal.querySelectorAll("input");
// const userInputs = addMovieModal.getElementsByTagName('input');
const entryText = document.getElementById("entry-text");
const movieListRootElement = document.getElementById("movie-list");
const movieList = [];
const deleteModal = document.getElementById("delete-modal");

const checkMovieListNumber = () => {
  if (movieList.length === 0) {
    entryText.style.display = "block";
  } else {
    entryText.style.display = "none";
  }
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movieList) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movieList.splice(movieIndex, 1);
  movieListRootElement.children[movieIndex].remove();
  //movieListRootElement.removeChild(movieListRootElement.children[movieIndex]);
  checkMovieListNumber();
  closeDeleteMovieModal();
};

const startDeleteMovieHandler = (movieId) => {
  showDeleteMovieModal();
  toggleBackdrop();

  const cancelDeleteMovieBtn = deleteModal.querySelector(".btn--passive");
  let confirmDeleteMovieBtn = deleteModal.querySelector(".btn--danger");
  
  confirmDeleteMovieBtn.replaceWith(confirmDeleteMovieBtn.cloneNode(true));
  confirmDeleteMovieBtn = deleteModal.querySelector(".btn--danger");
  
  cancelDeleteMovieBtn.removeEventListener('click', closeDeleteMovieModal);
  cancelDeleteMovieBtn.addEventListener("click", closeDeleteMovieModal);
  confirmDeleteMovieBtn.addEventListener(
    "click",
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderMovieList = (id, title, image, rating) => {
  const newMovieLi = document.createElement("li");
  newMovieLi.className = "movie-element";
  newMovieLi.innerHTML = `
    <div class="movie-element__image">
      <img src="${image}" alt="${title}"></img>
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating} / 5 Start</p>
    </div>
  `;

  movieListRootElement.appendChild(newMovieLi);
  newMovieLi.addEventListener("click", startDeleteMovieHandler.bind(null, id));
  //console.log(newMovieLi);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const clearModalInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const showAddMovieModal = () => {
  addModal.classList.add("visible");
  toggleBackdrop();
};
const closeAddMovieModal = () => {
  addModal.classList.remove("visible");
};
const showDeleteMovieModal = () => {
  deleteModal.classList.add("visible");
};
const closeDeleteMovieModal = () => {
  deleteModal.classList.remove("visible");
  toggleBackdrop();
};

const backdropClickHandler = () => {
  closeAddMovieModal();
  closeDeleteMovieModal();
  clearModalInput();
};
const cancelAddMovieHandler = () => {
  closeAddMovieModal();
  toggleBackdrop();
  clearModalInput();
};

const confirmAddMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("PLZ enter valid values!");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: "https://miro.medium.com/max/1400/1*DN7ToydkJZEdVaJVK_Nhvw.png",
    rating: ratingValue,
  };

  movieList.push(newMovie);
  //console.log(movieList);
  clearModalInput();
  checkMovieListNumber();
  closeAddMovieModal();
  toggleBackdrop();
  renderMovieList(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
};

startAddMovieBtn.addEventListener("click", showAddMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener("click", confirmAddMovieHandler);
