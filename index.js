const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.use(`/api`, (_, res) => {
  res.json({ greet: "Hello" });
});

app.listen(port, () => {
  console.log(`\n* Listening on port ${port} *\n`)
});