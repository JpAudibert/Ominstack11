const Ong = require("../models/Ong");
const Incident = require("../models/Incident");

module.exports = {
  async index(req, res) {
    try {
      const authorization = req.headers.authorization;

      const { id } = await Ong.findOne({
        where: { credential: authorization }
      });

      const incidents = await Incident.findAll({ where: { ong_id: id } });
      console.log(incidents);

      return res.json(incidents);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
};
