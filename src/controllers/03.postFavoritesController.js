const { User, Favorite } = require("../database/DB_connection");

async function postFavoritesController(character, idUser) {
  const user = await User.findByPk(idUser);
  const isCharacter = await Favorite.findByPk(character.id);

  if (!isCharacter) await user.createFavorite(character);
  else await user.addFavorite(isCharacter);

  const favoritos = await user.getFavorites({
    attributes: ["id", "name", "species", "gender", "image"],
    raw: true,
  });

  return favoritos;
}
module.exports = postFavoritesController;
