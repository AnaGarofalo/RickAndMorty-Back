const axios = require("axios");

async function getCharByIdController(id) {
  const data = await axios(`https://rickandmortyapi.com/api/character/${id}`);
  return data.data;
}
module.exports = getCharByIdController;
