const express = require("express");
const { database } = require("./database/DB_connection");
const cors = require("cors");
const router = require("./routes/index");
require("dotenv").config();

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/rickandmorty", router);

database.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log("Server listening in port", PORT);
  });
});

module.exports = app;
