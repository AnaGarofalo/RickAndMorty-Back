const postFavoritesController = require("../controllers/03.postFavoritesController");

const postFavorites = async (req, res) => {
  try {
    const { character } = req.body;
    const { idUser } = req.body;
    const favoritos = await postFavoritesController(character, idUser);
    res.status(200).json({ favoritos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = postFavorites;
