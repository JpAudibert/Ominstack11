const Ong = require("../models/Ong");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    try {
      const ongs = await Ong.findAll();

      return res.json(ongs);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async store(req, res) {
    try {
      const { name, email, whatsApp, city, uf } = req.body;

      const credential = crypto.randomBytes(4).toString("HEX");

      const ong = await Ong.create({
        name,
        email,
        whatsApp,
        city,
        uf,
        credential
      });

      res.json({ success: "Success!", ong });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  
};
