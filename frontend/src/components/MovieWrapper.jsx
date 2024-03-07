import React, { useEffect, useState } from "react";
import { MovieForm } from "./MovieForm";
import { Movie } from "./Movie";
import {
  addMovieDb,
  getAllMovies,
  updateMovieDb,
  deleteMovieDb,
} from "../../utils/handleApi";
import { EditMovieForm } from "./EditMovieForm";

export const MovieWrapper = () => {
  const [movies, setMovies] = useState([]);
  const [updateMovieId, setUpdateMovieId] = useState("");

  useEffect(() => {
    getAllMovies(setMovies);
  }, []);

  const addMovie = (movie) => {
    if (movie !== "") {
      addMovieDb(movie, setMovies);
    }
  };

  const toggleComplete = (id) => {
    setMovies(
      movies.map((movie) =>
        movie._id == id ? { ...movie, completed: !movie.completed } : movie
      )
    );
  };

  const setIsEditing = (id) => {
    setMovies(
      movies.map((movie) =>
        movie._id === id
          ? { ...movie, isEditing: true }
          : { ...movie, isEditing: false }
      )
    );
    setUpdateMovieId(id);
  };

  const updateMovie = (inputValue) => {
    if (inputValue != "") {
      updateMovieDb(updateMovieId, inputValue, setMovies);
    }

    setMovies(movies.map((movie) => ({ ...movie, isEditing: false })));
  };

  const deleteMovie = (id) => {
    deleteMovieDb(id, setMovies);
  };

  return (
    <div className="MovieWrapper">
      <h1>Let's Watch Something</h1>
      <MovieForm addMovie={addMovie} />
      {movies.map((movie) =>
        movie.isEditing ? (
          <EditMovieForm updateMovie={updateMovie} key={movie._id} />
        ) : (
          <Movie
            movie={movie}
            key={movie._id}
            toggleComplete={toggleComplete}
            setIsEditing={setIsEditing}
            deleteMovie={deleteMovie}
          />
        )
      )}
    </div>
  );
};
