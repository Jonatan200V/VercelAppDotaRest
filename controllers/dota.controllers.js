const { data, noticias } = require("../database/dota.js");
const getDota = (req, res) => {
  res.json(data);
};
const getNoticias = (req, res) => {
  res.json(noticias);
};
module.exports = {
  getDota,
  getNoticias,
};
