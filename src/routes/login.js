const { Router } = require("express");
const postUserHandler = require("../handlers/06.postUser");
const loginHandler = require("../handlers/07.login");
const getUserId = require("../handlers/08.getUserId");

const login = Router();

login.post("/", postUserHandler);
login.get("/", loginHandler);
login.get("/getUserId", getUserId);

module.exports = login;
