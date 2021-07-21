"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("tb_game_platform", {
      game_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tb_games",
          key: "id",
        },
      },
      platform_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tb_platforms",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("tb_game_platform");
  },
};
