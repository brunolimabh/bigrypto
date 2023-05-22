var express = require("express");
var router = express.Router();

var cotacaoController = require("../controllers/cotacaoController");

router.get("/cotarBanco/:moeda:ano", function (req, res) {
    cotacaoController.cotarBanco(req, res);
});


module.exports = router;