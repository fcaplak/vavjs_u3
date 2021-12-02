const { sequelize } = require('../models/index.js')
const Reklama = sequelize.models.Reklama

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
  
  Reklama.update({ ...req.body, counter: 0 }, {
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