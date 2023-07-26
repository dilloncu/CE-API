const express = require("express");
const cors = require("cors");

require("dotenv").config();

const PORT = 5500;
const app = express();

app.use(cors());
const data = require("./weatherapi.json");
app.get("/", (req, res) => {
  response.json("weatherapi");
});