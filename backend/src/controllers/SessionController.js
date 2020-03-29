const Ong = require("../models/Ong");

module.exports = {
  async create(req, res) {
    try {
      const { credential } = req.body;

      const ong = await Ong.findOne({ where: { credential } });

      if (!ong) {
        return res.status(400).json(`No ONG found with this ${credential}`);
      }

      return res.json({ ong });
    } catch (error) {
      console.log(error);
      
      return res.status(400).json({ error });
    }
  }
};
