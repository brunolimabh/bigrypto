// fetch('url') = chama o link que será usado
// then() = pega oq esta dentro e cria uma função / nome_qualquer = nome d afuncao criada
// nome_qualquer.json = exibir a API

function ver_cotacao_aovivo() {
    var cripto = cripto_aovivo.value;

    fetch(`https://www.mercadobitcoin.net/api/${cripto}/trades/`).then(nome_qualquer=>{
        return nome_qualquer.json();
    }).then(corpo=>{
        var cotacao_agora = corpo[0].price;
        console.log(cotacao_agora)
    })
}

// resumo, THEN, pega oq esta dentro dessa resposta e me retorna em json,
// e dentro dessa respoosta eu quero o corpo desse resposta e me retorne
