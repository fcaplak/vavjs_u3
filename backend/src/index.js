const express = require('express')
const app = express()
const port = 8080
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(express.json());
app.use(cors(corsOptions));

require('./routes')(app);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})