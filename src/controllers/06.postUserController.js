const { User } = require("../database/DB_connection");

const postUserController = async (email, password) => {
  const oldEmail = await User.findOne({ where: { email } });
  if (oldEmail) throw Error("Username alredy exists");
  return await User.create({ email, password });
};

module.exports = postUserController;
