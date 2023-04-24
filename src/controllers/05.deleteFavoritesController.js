const { Favorite, User } = require("../database/DB_connection");

async function deleteFavoritesController(idCharacter, idUser) {
  const character = await Favorite.findByPk(idCharacter);
  const user = await User.findByPk(idUser);
  await user.removeFavorite(character);
  return character;
}

module.exports = deleteFavoritesController;
