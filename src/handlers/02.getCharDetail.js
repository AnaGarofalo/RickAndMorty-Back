const axios = require("axios");
const getCharDetailController = require("../controllers/02.getCharDetialController");
const { URL_BASE, API_KEY } = process.env;

const getCharDetail = async (req, res) => {
  const { id } = req.params;

  try {
    const char = await getCharDetailController(id);
    res.status(200).json({
      id: char.id,
      name: char.name,
      gender: char.gender,
      species: char.species,
      image: char.image,
      origin: char.origin,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCharDetail;
