const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("MovieSchema", movieSchema);
