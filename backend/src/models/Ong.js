const { Model, DataTypes } = require("sequelize");

class Ong extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        whatsApp: DataTypes.STRING,
        city: DataTypes.STRING,
        uf: DataTypes.STRING(2),
        credential: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "ongs"
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Incidents, { foreignKey: "ong_id", as: "incidents" });
  }
}

module.exports = Ong;
