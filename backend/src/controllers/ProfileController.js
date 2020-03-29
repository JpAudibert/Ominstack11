const Incident = require("../models/Incident");

module.exports = {
  async index(req, res) {
    // const authorization = req.headers.authorization;
    const id = req.headers.id;

    const incidents = await Incident.findAll({ where: { ong_id: id } });

    return res.json(incidents);
  }
};
