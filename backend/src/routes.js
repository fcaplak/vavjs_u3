const produkt = require("../controllers/produkt.controller.js");
const reklama = require("../controllers/reklama.controller.js");
const objednavka = require("../controllers/objednavka.controller.js");

module.exports = function (app) {
    // Produkty
    app.get('/produkty', produkt.findAll);
    app.get('/produkty/:id', produkt.findOne);

    // Reklama
    app.put('/reklama', reklama.update);
    app.get('/reklama', reklama.findOne);
    app.put('/reklama/increment', reklama.increment);


    // Objednavka
    app.post('/objednavky', objednavka.create); 
    app.put('/objednavky/:order_id', objednavka.update);
    app.get('/objednavky', objednavka.findAll);
}