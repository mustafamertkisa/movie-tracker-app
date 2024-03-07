import React, { useState } from "react";

export const EditMovieForm = ({ updateMovie }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    updateMovie(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="movie-input"
        value={inputValue}
        placeholder="Update movie"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="movie-btn">
        Edit Movie
      </button>
    </form>
  );
};
