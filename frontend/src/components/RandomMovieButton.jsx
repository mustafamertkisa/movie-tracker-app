import React, { useEffect, useState } from "react";
import { getRandomMovie } from "../../utils/handleApi";
import Swal from "sweetalert2";

export const RandomMovieButton = () => {
  const [randomMovie, setRandomMovie] = useState("");

  useEffect(() => {
    getRandomMovie(setRandomMovie);
  });

  const selectMovie = () => {
    const movieDetails = `<ul style="text-align: left;">
    <li><strong style="color: #2c3539;">Actors:</strong> ${randomMovie.Actors}</li>
    <li><strong style="color: #2c3539;">Director:</strong> ${randomMovie.Director}</li>
    <li><strong style="color: #2c3539;">Genre:</strong> ${randomMovie.Genre}</li>
    <li><strong style="color: #2c3539;">Year:</strong> ${randomMovie.Year}</li>
    <li><strong style="color: #2c3539;">Rating:</strong> ${randomMovie.imdbRating}</li>
  </ul>`;

    Swal.fire({
      title: randomMovie.Title,
      imageUrl: randomMovie.Poster,
      imageWidth: 300,
      html: movieDetails,
      background: "#EBE3D5",
      confirmButtonColor: "#7E6363",
      confirmButtonText: "Great!",
    });
    console.log(randomMovie);
  };

  return (
    <button className="random-btn" onClick={selectMovie}>
      Discover Surprise Film
    </button>
  );
};
