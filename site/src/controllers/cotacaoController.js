var cotacaoModel = require("../models/cotacaoModel");

function cotacaoBanco(req, res) {

    var moeda = localStorage.MOEDA

    console.log(`Recuperando as médias mensais`);

    cotacaoModel.cotacaoBanco(moeda).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cotacaoBanco
}