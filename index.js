const dotenv = require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(`/api`, (_, res) => {
  res.json({ greet: "Hello" });
});

app.listen(port, () => {
  console.log(`\n* Listening on port ${port} *\n`)
});