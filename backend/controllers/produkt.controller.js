var models = require('../models');
var Produkt = models.produkt;

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