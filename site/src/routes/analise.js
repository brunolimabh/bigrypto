var express = require("express");
var router = express.Router();

var analiseController = require("../controllers/analiseController");


router.get("/listarAnalises", function (req, res) {
    analiseController.listarAnalises(req, res);
});

router.get("/listarComentarios", function (req, res) {
    analiseController.listarComentarios(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    analiseController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    analiseController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    analiseController.deletar(req, res);
});

module.exports = router;