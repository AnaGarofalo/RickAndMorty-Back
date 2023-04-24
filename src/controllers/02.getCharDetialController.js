const axios = require("axios");

async function getCharDetailController(id) {
  const data = await axios(`https://rickandmortyapi.com/api/character/${id}`);
  return data.data;
}
module.exports = getCharDetailController;
