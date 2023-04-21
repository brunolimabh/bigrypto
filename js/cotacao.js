

// fetch('url') = chama o link que será usado
// then() = pega oq esta dentro e cria uma função / nome_qualquer = nome d afuncao criada
// nome_qualquer.json = exibir a API
fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(nome_qualquer=>{
    return nome_qualquer.json()
}).then(corpo=>{
    console.log(corpo)
})

// resumo, THEN, pega oq esta dentro dessa resposta e me retorna em json,
// e dentro dessa respoosta eu quero o corpo desse resposta e me retorne


