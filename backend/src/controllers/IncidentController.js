const Ong = require("../models/Ong");
const Incident = require("../models/Incident");

module.exports = {
  async index(req, res) {
    try {
      const { page = 1 } = req.query;

      const { count } = await Incident.findAndCountAll();

      const incidents = await Incident.findAll({
        // Name of the relation in Incidents Model
        include: { association: "ongs" },
        limit: 5,
        offset: (page - 1) * 5
      });

      return res.json({ incidents, count });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  },

  async store(req, res) {
    try {
      const { title, description, value } = req.body;
      const authorization = req.headers.authorization;
      const id = req.headers.id;
      let ong_id = id;

      if (!authorization) {
        return res.status(401).json({ error: `You're NOT allowed` });
      }

      const ong = await Ong.findByPk(ong_id);

      if (!ong && ong.credential != authorization) {
        return res.status(400).json({ error: "There isn't this ONG" });
      }

      const incident = await Incident.create({
        title,
        description,
        value,
        ong_id
      });

      return res.json(incident.id);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async delete(req, res) {
    try {
      const authorization = req.headers.authorization;
      const { id } = req.params;

      const ong = await Ong.findOne({
        where: { credential: authorization }
      });

      if (ong) {
        const incident = await Incident.findByPk(id);
        if (!incident) {
          return res.status(400).json({ error: "There isn't this incident" });
        }

        const { title } = incident;

        incident.destroy();

        res.json({ success: `${title} does not exists anymore` });
      } else {
        return res.status(401).json({ error: `You're NOT allowed` });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  }
};
