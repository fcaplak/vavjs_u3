const { sequelize } = require('../models/index.js')
const Objednavka = sequelize.models.Objednavka
const ObjednavkaDetail = sequelize.models.ObjednavkaDetail
const Zakaznik = sequelize.models.Zakaznik
const Produkt = sequelize.models.Produkt

async function placeOrder(req, res) {

    const transaction = await sequelize.transaction();

    try {
        // Create Zakaznik
        const zakaznik = await Zakaznik.create({
            email: req.body.email,
            name: req.body.name,
            street: req.body.street,
            number: req.body.number,
            city: req.body.city,
            postcode: req.body.postcode
        }, { transaction });

        // Create Objednavka
        const objednavka = await Objednavka.create({
            customerId: zakaznik.id,
            status: false
        }, { transaction });

        // Create ObjednavkaDetail with zakaznik_id, order_id + products, quantity
        const req_products = req.body.items.map(
            item => {
                return {
                orderId: objednavka.id,
                productId: item.productId,
                quantity: item.quantity
              }
            });
        
        const objednavkaDetail = await ObjednavkaDetail.bulkCreate(req_products, { transaction });
        
      await transaction.commit();
      res.status(201);
      return res.json( objednavka.id );

    } catch (error) {
      await transaction.rollback();
      if (error.name === "SequelizeUniqueConstraintError")
        res.status(403);
      else
        res.status(400);
      return res.send(error);
    }
}

exports.create = (req, res) => {
    return placeOrder(req, res);
};

exports.update = (req, res) => {
    const order_id = req.params.order_id;
    
    Objednavka.update({ status: true }, { where: { id: order_id }})
        .then(num => {
            res.send("1");
        })
        .catch(err => {
        res.status(500).send({
          message: "Error updating with order_id=" + order_id
        });
      });
};

exports.findAll = (req, res) => {

  Objednavka.findAll({ include: [{ model: Zakaznik, as: "customer", attributes: { exclude: ['id'] } }, { model: ObjednavkaDetail, as: "products", attributes: ['productId', 'quantity'], include: [{ model: Produkt } ] } ] })
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