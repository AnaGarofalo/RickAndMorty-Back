const deleteFavoritesController = require("../controllers/05.deleteFavoritesController");

const deleteFavorites = async (req, res) => {
  const { idUser } = req.query;
  const { id } = req.params;
  try {
    await deleteFavoritesController(id, idUser);
    res.status(200).json({ message: "Personaje borrado con éxito" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFavorites;
