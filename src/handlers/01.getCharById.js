const getCharByIdController = require("../controllers/01.getCharByIdController");
const { URL_BASE, API_KEY } = process.env;

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const char = await getCharByIdController(id);
    res.status(200).json({
      id: char.id,
      name: char.name,
      gender: char.gender,
      species: char.species,
      image: char.image,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCharById;
