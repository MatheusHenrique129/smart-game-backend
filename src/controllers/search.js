const { Op } = require("sequelize");
const Game = require("../models/Game");

module.exports = {
  async find(req, res) {
    const keyword = req.query.keyword;

    try {
      const search = await Game.findAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.like]: `%${keyword}%`,
              },
            },

            {
              price: {
                [Op.like]: `%${keyword}%`,
              },
            },
          ],
        },

        include: [
          {
            association: "Games",
            attributes: ["name"],
          },
        ],

        order: [["created_at", "DESC"]],
        limit: 3,
      });

      if (search == null || search == "" || search == undefined)
        return res.status(404).send({ Error: "0 Resultados encontrados." });

      res.status(200).send(search);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
