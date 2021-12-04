const express = require('express')
const app = express()
const port = 8080
const cors = require("cors");

app.use(express.json());
app.use(cors());

require('./routes')(app);

app.get('/', (req, res) => {
  res.send("I'm alive!")
})

app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`)
})

module.exports = app;