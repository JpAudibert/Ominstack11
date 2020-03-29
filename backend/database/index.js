const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Ong = require("../src/models/Ong");
const Incident = require("../src/models/Incident");

const connection = new Sequelize(dbConfig);

Ong.init(connection);
Incident.init(connection);

Ong.associate(connection.models);
Incident.associate(connection.models);

module.exports = connection;
