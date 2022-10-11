const Router = require("express");
const router = Router();
const { getDota, getNoticias } = require("../controllers/dota.controllers.js");

router.get("/api/dota", getDota);
router.get("/api/noticias", getNoticias);

module.exports = router;
