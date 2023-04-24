const { Router } = require("express");
const getCharById = require("../handlers/01.getCharById");
const getCharByDetail = require("../handlers/02.getCharDetail");
const favorites = require("./favorites");
const login = require("./login");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharByDetail);

router.use("/fav", favorites);
router.use("/login", login);

module.exports = router;
