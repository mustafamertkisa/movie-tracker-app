import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Movie = ({ movie, toggleComplete, setIsEditing, deleteMovie }) => {
  return (
    <div className="Movie">
      <p
        onClick={() => toggleComplete(movie._id)}
        className={`${movie.completed ? "completed" : ""}`}
      >
        {movie.movieName}
      </p>
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => setIsEditing(movie._id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteMovie(movie._id)}
        />
      </div>
    </div>
  );
};
