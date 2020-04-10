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
const entryText = document.getElementById("entry-text");
const movieListRootElement = document.getElementById("movie-list");
const movieList = [];

const checkMovieListNumber = () => {
  if (movieList === "") {
    entryText.style.display = "block";
  } else {
    entryText.style.display = "none";
  }
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for(const movie of movieList){
    if (movie.id === movieId ){
      break;
    }
    movieIndex++;  
  }
  movieList.splice(movieIndex, 1);
  movieListRootElement.children[movieIndex].remove();
  //movieListRootElement.removeChild(movieListRootElement.children[movieIndex]);
}

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
  newMovieLi.addEventListener('click', deleteMovieHandler.bind(null, id))
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

const toggleAddMovieModal = () => {
  addModal.classList.toggle("visible");
  toggleBackdrop();
};

const backdropClickHandler = () => {
  toggleAddMovieModal();
  clearModalInput();
};
const cancelAddMovieHandler = () => {
  toggleAddMovieModal();
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
  toggleAddMovieModal();
  checkMovieListNumber();
  renderMovieList(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
};

startAddMovieBtn.addEventListener("click", toggleAddMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener("click", confirmAddMovieHandler);
