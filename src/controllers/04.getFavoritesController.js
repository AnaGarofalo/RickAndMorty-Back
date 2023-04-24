const { User, Favorite } = require("../database/DB_connection");

async function getFavoritesController(idUser) {
  const user = await User.findByPk(idUser);
  const favorites = await user.getFavorites({
    attributes: ["id", "name", "species", "gender", "image"],
    raw: true,
  });
  return favorites;
}
module.exports = getFavoritesController;
