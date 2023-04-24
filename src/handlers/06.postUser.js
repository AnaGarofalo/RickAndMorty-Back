const postUserController = require("../controllers/06.postUserController");

const postUserHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(404).json({ error: "Faltan Datos" });
    }
    const newUser = await postUserController(email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUserHandler;
