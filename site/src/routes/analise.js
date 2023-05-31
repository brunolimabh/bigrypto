var express = require("express");
var router = express.Router();

var analiseController = require("../controllers/analiseController");


router.get("/listarAnalises/:nivel", function (req, res) {
    analiseController.listarAnalises(req, res);
});


module.exports = router;