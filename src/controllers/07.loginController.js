const { User } = require("../database/DB_connection");

const loginController = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};
module.exports = loginController;
