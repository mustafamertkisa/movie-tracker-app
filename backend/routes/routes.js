const { Router } = require("express");
const {
  getMovie,
  saveMovie,
  updateMovie,
  deleteMovie,
  getRandomMovie,
} = require("../controllers/controllers");

const router = Router();

router.get("/", getMovie);
router.get("/random", getRandomMovie);
router.post("/add", saveMovie);
router.put("/update", updateMovie);
router.delete("/delete", deleteMovie);

module.exports = router;
