import React, { useState } from "react";
import { RandomMovieButton } from "./RandomMovieButton";

export const MovieForm = ({ addMovie }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addMovie(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <RandomMovieButton />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="movie-input"
          value={inputValue}
          placeholder="What movie today?"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="movie-btn">
          Add Movie
        </button>
      </form>
    </div>
  );
};
