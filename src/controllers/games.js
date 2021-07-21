const Game = require("../models/Game");

module.exports = {
  async index(req, res) {
    try {
      const games = await Game.findAll({
        attributes: ["id", "name", "description", "image", "price", "rebate"],
        include: [
          {
            association: "Stores",
            attributes: ["id", "name", "map_location", "latitude", "longitude"],
            through: { attributes: [] },
          },
          {
            association: "Platforms",
            attributes: ["id", "name"],
            through: { attributes: [] },
          },
        ],
      });

      res.send(games);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async find(req, res) {
    const gameId = req.params.id;

    try {
      const game = await Game.findByPk(gameId, {
        attributes: ["id", "name", "description", "image", "price", "rebate"],
        include: [
          {
            association: "Stores",
            attributes: ["id", "name", "map_location", "latitude", "longitude"],
            through: { attributes: [] },
          },
          {
            association: "Platforms",
            attributes: ["id", "name"],
            through: { attributes: [] },
          },
        ],
      });

      res.send(game);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async update(req, res) {},

  async delete(req, res) {},
};
