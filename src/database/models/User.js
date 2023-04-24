const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: "^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$",
          len: [6, 10],
        },
      },
    },
    { timestamps: false }
  );
};
