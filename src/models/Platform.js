const { Model, DataTypes } = require("sequelize");

class Platform extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Game, { through: "tb_game_platform" });
  }
}

module.exports = Platform;
