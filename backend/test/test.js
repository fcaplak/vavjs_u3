var server = require('../src/index.js');
var fetch = require('cross-fetch');
var chai = require('chai');
var chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

var id;


describe("Produkty", () => {
    describe("GET /produkty", () => {
        it("It should return 3 products", async() => {
            await fetch('http://localhost:8080/produkty')
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    res.length.should.be.eq(3);
                })
        });
    });
});

describe("Objednavka", () => {
    describe("POST /objednavky", () => {
        it("It should return status 201", async() => {
            await fetch('http://localhost:8080/objednavky', {
                method: 'POST', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }, body: JSON.stringify({
                    "email": "filip@caplak.sk",
                    "name" : "Filip Caplak",
                    "number" : "522",
                    "city" : "Streda nad Bodrogom",
                    "street": "Vyvojova",
                    "postcode" : "123456",
                    "items" :
                    [
                        {
                            "productId" : 1,
                            "quantity" : 5
                        },
                        {
                            "productId" : 2,
                            "quantity" : 4
                        }
                    ]
                  })
            })
            .then((res) => { 
                res.status.should.be.eq(201);
                return res.json() 
            })
            .then((res) => {
                id = res;
            })
        });
        it("It should return status 403 - existing email", async() => {
            await fetch('http://localhost:8080/objednavky', {
                method: 'POST', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }, body: JSON.stringify({
                    "email": "filip@caplak.sk",
                    "name" : "Filipp Caplak",
                    "number" : "5222",
                    "city" : "Stredaa nad Bodrogom",
                    "street": "Vyvojovaa",
                    "postcode" : "12345",
                    "items" :
                    [
                        {
                            "productId" : 1,
                            "quantity" : 5
                        }
                    ]
                })})
                .then((res) => {
                    res.should.have.status(403);
                })
        });   
    });
});

describe("Reklama", () => {
    describe("GET /reklama", () => {
        it("It should return object with link and image key", async() => {
            await fetch('http://localhost:8080/reklama')
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    res.should.have.property("link");
                    res.should.have.property("image");
                })
        });
        it("It should return response status 200", async() => {
            await fetch('http://localhost:8080/reklama')
                .then((res) => {
                    res.should.have.status(200);
                })
        });
    });

    describe("PUT /reklama/increment", () => {
        it("It should return response status 200", async() => {
            await fetch('http://localhost:8080/reklama/increment', { method: 'PUT' })
                .then((res) => {
                    res.should.have.status(200);
                })
        });
    });
});

describe("Admin", () => {
    describe("GET /objednavky", () => {
        it("Response length should not be 0", async() => {
            await fetch('http://localhost:8080/objednavky')
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    res.length.should.not.be.eq(0);
                })
        });
    });

    describe("PUT /reklama", () => {
        it("It should update ad and return response status 200", async() => {
            await fetch('http://localhost:8080/reklama', {
                method: 'PUT', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                link : "https://www.kaufland.sk/",
                image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Kaufland.png"
            })})
                .then((res) => {
                    res.should.have.status(200);
                })
        });
    });

    describe(`PUT /objednavka/id`, () => {
        it("It should return response status 200 and update status order", async() => {
            await fetch(`http://localhost:8080/objednavky/${id}`, { method: 'PUT' })
                .then((res) => {
                    res.should.have.status(200);
                })
        });
    }); 
});