const express = require("express");
const { database } = require("./database/DB_connection");
const cors = require("cors");
const router = require("./routes/index");
require("dotenv").config();

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use("/rickandmorty", router);

database.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log("Server listening in port", PORT);
  });
});

module.exports = app;
