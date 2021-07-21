const express = require("express");

const routes = express.Router();

const gameController = require("./controllers/games");

routes.get("/games", gameController.index);
routes.get("/games/:id", gameController.find);
routes.put("/games/:id", gameController.update);

module.exports = routes;
