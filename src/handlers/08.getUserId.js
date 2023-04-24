const getUserIdController = require("../controllers/08.getUserId");

const getUserId = async (req, res) => {
  try {
    const { email } = req.query;
    const idUser = await getUserIdController(email);
    res.status(200).json({ idUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = getUserId;
