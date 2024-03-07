const axios = require("axios");
const movieModel = require("../models/models");
const movies = require("../utils/movies.json");

module.exports.getMovie = async (req, res) => {
  try {
    const movieData = await movieModel.find();
    res.status(200).send(movieData);
  } catch (error) {
    console.error("Error while getting movies:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.saveMovie = async (req, res) => {
  try {
    const { movieName } = req.body;
    const newMovie = await movieModel.create({ movieName });
    console.log("Saved successfully: ", newMovie);
    res.status(201).send(newMovie);
  } catch (error) {
    console.error("Error while saving movie:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.updateMovie = async (req, res) => {
  try {
    const { _id, movieName } = req.body;
    await movieModel.findByIdAndUpdate(_id, { movieName });
    res.status(200).send("Updated successfully...");
  } catch (error) {
    console.error("Error while updating movie:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.deleteMovie = async (req, res) => {
  try {
    const { _id } = req.body;
    await movieModel.findByIdAndDelete(_id);
    res.status(200).send("Deleted successfully...");
  } catch (error) {
    console.error("Error while deleting movie:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.getRandomMovie = async (req, res) => {
  try {
    if (!Array.isArray(movies) || movies.length == 0) {
      throw new Error("Movie data is not valid.");
    }

    const randomNum = Math.floor(Math.random() * 100);
    const randomMovie = movies[randomNum];
    const omdbApiKey = process.env.OMDB_API_KEY;

    if (!omdbApiKey) {
      throw new Error("OMDB API key is missing.");
    }

    const omdbApiUrl = `https://www.omdbapi.com/?i=${randomMovie.id}&apikey=${omdbApiKey}`;
    const response = await axios.get(omdbApiUrl);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error while fetching random movie:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
