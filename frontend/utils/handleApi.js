import axios from "axios";

const baseUrl = "http://localhost:8081";

export const getAllMovies = (setMovies) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      const moviesWithFields = data.map((movie) => ({
        ...movie,
        isEditing: false,
        completed: false,
      }));

      setMovies(moviesWithFields);
    })
    .catch((err) => console.log(err));
};

export const getRandomMovie = (setRandomMovie) => {
  axios
    .get(baseUrl + "/random")
    .then(({ data }) => {
      setRandomMovie(data);
    })
    .catch((err) => console.log(err));
};

export const addMovieDb = (inputValue, setMovies) => {
  axios
    .post(baseUrl + "/add", { movieName: inputValue })
    .then(() => {
      getAllMovies(setMovies);
    })
    .catch((err) => console.log(err));
};

export const updateMovieDb = (movieId, inputValue, setMovies) => {
  axios
    .put(baseUrl + "/update", { _id: movieId, movieName: inputValue })
    .then(() => {
      getAllMovies(setMovies);
    })
    .catch((err) => console.log(err));
};

export const deleteMovieDb = (movieId, setMovies) => {
  axios
    .delete(baseUrl + "/delete", { data: { _id: movieId } })
    .then(() => {
      getAllMovies(setMovies);
    })
    .catch((err) => console.log(err));
};
