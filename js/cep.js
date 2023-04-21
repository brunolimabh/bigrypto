

// fetch('url') = chama o link que será usado
// then() = cria uma função / nome_qualquer = nome d afuncao criada
// nome_qualquer.json = exibir a API

function ver_cep() {
    fetch(`https://viacep.com.br/ws/${ipt_cep.value}/json/`).then(nome_qualquer=>{
        return nome_qualquer.json()
    }).then(corpo=>{
        document.getElementById('msg').innerHTML = corpo.logradouro
    })
}



