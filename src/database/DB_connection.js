require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_URL } = process.env;
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorites");

// const database = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//   { logging: false }
// );

const database = new Sequelize(DB_URL, {
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
});

UserModel(database);
FavoriteModel(database);

const { User, Favorite } = database.models;

User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = { database, ...database.models };
