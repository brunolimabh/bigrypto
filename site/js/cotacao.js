// fetch('url') = chama o link que será usado
// then() = pega oq esta dentro e cria uma função / nome_qualquer = nome d afuncao criada
// nome_qualquer.json = exibir a API
// resumo, THEN, pega oq esta dentro dessa resposta e me retorna em json,
// e dentro dessa respoosta eu quero o corpo desse resposta e me retorne



function ver_cotacao_aovivo() {
    var listaPreco = [];
    var listaData = [];
    var cotacao_agora = 0;
    var data_cotacao = 0;
    var cripto = cripto_aovivo.value;

    graficoC.data.datasets[0].data = [];

    // consultando a API
    fetch(`https://www.mercadobitcoin.net/api/${cripto}/trades/`).then(nome_qualquer => {
        return nome_qualquer.json();
    }).then(corpo => {

        // pegando os ultimos 6 dados e guardando no vetor
        for (var i = 1; i <= 10; i++) {
            cotacao_agora = (corpo[corpo.length - i].price).toFixed(3);
            data_cotacao = corpo[corpo.length - i].date;

            for (var n = 0; n <= listaPreco.length; n++) {
                if (cotacao_agora != listaPreco[n]) {
                    listaPreco.push(cotacao_agora);
                    listaData.push(data_cotacao);
                    // graficoC.data.datasets[0].data.push("2")
                    // graficoC.data.labels.push(data_cotacao)
                    graficoC.data.datasets[0].data.push(cotacao_agora)
                    break
                }
            }
        }
    
        // graficoC.data.datasets.push(listaPreco)
        

        // console.log(graficoC.data.datasets[0].data.push(20))
        console.log(graficoC.data.datasets[0])
        graficoC.update()
    })
}


