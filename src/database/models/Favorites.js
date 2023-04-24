const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      // status: {
      //   type: DataTypes.ENUM("Alive", "Dead", "unknown"),
      //   defaultValue: "unknown",
      // },
      species: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.ENUM("Male", "Female", "unknown", "Genderless"),
        defaultValue: "unknown",
      },
      // origin: {
      //   type: DataTypes.STRING,
      // },
      image: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
