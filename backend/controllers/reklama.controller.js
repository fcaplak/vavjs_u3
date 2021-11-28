const { sequelize } = require('../models/index.js')
const Reklama = sequelize.models.Reklama

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const reklama = {
        link: req.body.link,
        image: req.body.link,
        counter: 0,
    };

    Reklama.create(reklama)
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
    const id = 1;
    
    Reklama.findByPk(id)
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

exports.update = (req, res) => {
    const id = 1;
  
    Reklama.update(req.body, {
      where: { id: id }
    })
        .then(num => {
            res.send("1");
        })
        .catch(err => {
        res.status(500).send({
          message: "Error updating with id=" + id
        });
      });
};
  
exports.increment = (req, res) => {
    const id = 1;
  
    Reklama.increment('counter', { by: 1, where: { id: id } })
      .then(num => {
          res.send("1");
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating with id=" + id
        });
      });
  };