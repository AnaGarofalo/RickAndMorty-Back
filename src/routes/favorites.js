const { Router } = require("express");
const postFavorites = require("../handlers/03.postFavorites");
const getFavorites = require("../handlers/04.getFavorites");
const deleteFavorites = require("../handlers/05.deleteFavorites");

const favorites = Router();

favorites.post("/", postFavorites);
favorites.get("/:idUser", getFavorites);
favorites.delete("/:id", deleteFavorites);

module.exports = favorites;
