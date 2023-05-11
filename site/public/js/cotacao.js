// fetch('url') = chama o link que será usado
// then() = pega oq esta dentro e cria uma função / nome_qualquer = nome d afuncao criada
// nome_qualquer.json = exibir a API
// resumo, THEN, pega oq esta dentro dessa resposta e me retorna em json,
// e dentro dessa respoosta eu quero o corpo desse resposta e me retorne

// function ver_cotacao_banco() {
//     const mysql = require('mysql2');
//     var onde = '';
//     const poolBancoDados = mysql.createPool(
//         {
//             host: 'localhost',
//             port: 3306,
//             user: 'big_individual',
//             password: 'urubu100',
//             database: 'bigrypto'
//         }
//     ).promise();
//     poolBancoDados.execute(
//         `SELECT media FROM moedaAno WHERE ${}`,
//     );
// }

function ver_cotacao_aovivo() {
    var listaPreco = [];
    var listaData = [];
    var cotacao_agora = 0;
    var data_cotacao = 0;
    var cripto = cripto_aovivo.value;
    var qtd_valores = 0;
    var cont = 1;

    graficoC.data.datasets[0].data = [];
    graficoC.data.labels = [];

    var unix = 0;
    var date = 0;

    // consultando a API
    fetch(`https://www.mercadobitcoin.net/api/${cripto}/trades/`).then(nome_qualquer => {
        return nome_qualquer.json();
    }).then(corpo => {

        // pegando os ultimos 10 dados e guardando no vetor
        while (qtd_valores <= 10) {
            cotacao_agora = (corpo[corpo.length - cont].price).toFixed(3);
            data_cotacao = corpo[corpo.length - cont].date;
            if (cotacao_agora != listaPreco[0]) {
                listaPreco.unshift(cotacao_agora);
                graficoC.data.datasets[0].data.unshift(cotacao_agora);

                unix = data_cotacao;
                date = new Date(unix * 1000);
                data_cotacao = date.toLocaleTimeString("pt-BR");

                listaData.unshift(data_cotacao);
                graficoC.data.labels.unshift(data_cotacao);
                qtd_valores++;
            }
            cont++;
        }
        graficoC.update();
    })
}


