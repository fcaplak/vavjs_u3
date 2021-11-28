const { sequelize } = require('../models/index.js')
const Produkt = sequelize.models.Produkt

exports.findAll = (req, res) => {
    Produkt.findAll()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "REST API error"
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Produkt.findByPk(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "REST API error"
      });
    });
};