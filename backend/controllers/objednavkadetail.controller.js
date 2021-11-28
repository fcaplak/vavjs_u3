var models = require('../models');
var ObjednavkaDetail = models.objednavkadetail;

exports.findOrder = (req, res) => {
    const order_id = req.params.order_id;

    ObjednavkaDetail.findAll({ where: {orderId: order_id} })
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
