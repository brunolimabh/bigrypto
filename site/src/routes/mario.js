var express = require("express");
var router = express.Router();

var marioController = require("../controllers/marioController");


router.post("/guardarTempo", function (req, res) {
    marioController.guardarTempo(req, res);
})

router.get("/ranking", function (req, res) {
    marioController.ranking(req, res);
});


module.exports = router;