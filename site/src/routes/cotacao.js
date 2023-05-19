var express = require("express");
var router = express.Router();

var cotacaoController = require("../controllers/cotacaoController");

router.get("/cotacaoBanco", function (req, res) {
    cotacaoController.cotacaoBanco(req, res);
});


module.exports = router;