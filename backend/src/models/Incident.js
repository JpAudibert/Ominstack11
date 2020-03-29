const { Model, DataTypes } = require("sequelize");

class Incidents extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING(300),
        value: DataTypes.DECIMAL(10, 2)
      },
      {
        sequelize,
        tableName: "incidents"
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Ong, { foreignKey: "ong_id", as: "ongs" });
  }
}

module.exports = Incidents;
