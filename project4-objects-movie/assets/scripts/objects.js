const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const title = document.getElementById("title");
const extraName = document.getElementById("extra-name");
const extraValue = document.getElementById("extra-value");

const movies = [
  // {
  //   info: {
  //     title: "JavaScript",
  //     level: 5,
  //   },
  //   id: 123,
  // },
  // {
  //   info: {
  //     title: "Java",
  //     level: 4,
  //   },
  //   id: 456,
  // },
  // {
  //   info: {
  //     title: "C#",
  //     level: 4,
  //   },
  //   id: 789,
  // },
];

const renderMovieListEle = (filterText = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }

  // let filterMovie;
  //  if(filterText === ''){
  //   filterMovie = movies;
  // }else{
  //   filterMovie = movies.filter(movie => movie.info.title.includes(filterText));
  // }

  const filterMovie = !filterText
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filterText));

  movieList.innerHTML = "";

  filterMovie.forEach((movie) => {
    const movieEleLi = document.createElement("li");
    //let { getUpperTitle } = movie;
    //console.log(this);
    //getUpperTitle = getUpperTitle.bind(this);
    let text = movie.getUpperTitle() + " - ";

    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key} : ${movie.info[key]}`;
      }
    }
    movieEleLi.textContent = text;
    //console.log(movieEleLi);
    movieList.appendChild(movieEleLi);
  });
};

const addMovieEventHandler = () => {
  const newTitle = title.value;
  const newExtraName = extraName.value;
  const newExtraValue = extraValue.value;

  if (
    newTitle.trim() === "" ||
    newExtraName.trim() === "" ||
    newExtraValue.trim() === ""
  ) {
    return;
  }

  const movie = {
    info: {
      title: newTitle,
      [newExtraName]: newExtraValue,
    },
    id: Math.random(),
    getUpperTitle: function() {
      return this.info.title.toUpperCase();
    }
  };
  movies.push(movie);
  console.log(title);
  renderMovieListEle();
};

const filterMovieHandler = () => {
  const filterText = document.getElementById("filter-title").value;
  renderMovieListEle(filterText);
};

addMovieBtn.addEventListener("click", addMovieEventHandler);
searchBtn.addEventListener("click", filterMovieHandler);
