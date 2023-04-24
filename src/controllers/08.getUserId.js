const { User } = require("../database/DB_connection");

const getUserIdController = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user.id;
};
module.exports = getUserIdController;
