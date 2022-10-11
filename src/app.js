const express = require("express");
const app = express();
const cors = require("cors");
const routerDota = require("../routes/dota.routes.js");
app.use(express.json());
app.use(cors());
app.use(routerDota);
module.exports = app;
