const loginController = require("../controllers/07.loginController");

const loginHandler = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (!email || !password)
      return res.status(400).json({ error: "Faltan Datos" });

    const user = await loginController(email);
    if (!user) return res.status(404).json({ error: "User not found" });
    if (user.password !== password)
      return res.status(403).json({ error: "Incorrect password" });

    res.status(200).json({ acces: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = loginHandler;
