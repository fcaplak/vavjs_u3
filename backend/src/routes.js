const produkt = require("../controllers/produkt.controller.js");
const reklama = require("../controllers/reklama.controller.js");
const objednavka = require("../controllers/objednavka.controller.js");
const objednavkadetail = require("../controllers/objednavkadetail.controller.js");
const zakaznik = require("../controllers/zakaznik.controller.js");

module.exports = function (app) {
    // Produkty
    app.get('/produkty', produkt.findAll);
    app.get('/produkty/:id', produkt.findOne);

    // Zakaznik
    //app.post('/zakaznik', zakaznik.create);
    //app.get('/zakaznik/:id', zakaznik.findOne);

    // Reklama
    //app.post('/reklama', reklama.create);
    app.put('/reklama', reklama.update);
    app.get('/reklama', reklama.findOne);
    app.put('/reklama/increment', reklama.increment);

    // Objednavka detail
    //app.post('/objednavka/detail', objednavkadetail.create); DO NOT IMPLEMENT ROUTE
    //app.get('/objednavka/detail/:order_id', objednavkadetail.findOrder);

    // Objednavka
    app.post('/objednavky', objednavka.create); 
    app.put('/objednavky/:order_id', objednavka.update);
    app.get('/objednavky', objednavka.findAll);
}