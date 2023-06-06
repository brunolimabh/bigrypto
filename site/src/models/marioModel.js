var database = require("../database/config");

function guardarTempo(idUsuario,tempo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function guardarTempo():", tempo);
    var instrucao = `
        INSERT INTO tempos (fkUsuario, tempo) VALUES (${idUsuario}, '${tempo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function ranking() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function ranking()");
    var instrucao = `
        SELECT nome, tempo FROM tempos JOIN usuario WHERE fkUsuario = id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




module.exports = {
    guardarTempo,
    ranking
}
