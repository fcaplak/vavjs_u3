var models = require('../models');
var Zakaznik = models.zakaznik;

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const zakaznik = {
        email: req.body.email,
        name: req.body.name,
        street: req.body.street,
        number: req.body.number,
        city: req.body.city,
        postcode: req.body.postcode
    };

    // Save Tutorial in the database
    Zakaznik.create(zakaznik)
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
    
    Zakaznik.findByPk(id)
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