const getFavoritesController = require("../controllers/04.getFavoritesController");

const getFavorites = async (req, res) => {
  const { idUser } = req.params;
  try {
    let favoritos = await getFavoritesController(idUser);
    res.status(200).json(favoritos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = getFavorites;
