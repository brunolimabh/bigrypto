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

function ver_cotacao_banco() {
    var moeda = document.getElementById('moeda_banco');
    var ano = document.getElementById('ano_banco');

    // localStorage.MOEDA_SELECIONADA = moeda.value;
    // localStorage.ANO_SELECIONADA = ano.value;
    fetch(`/cotacao/cotarBanco/${moeda.value}${ano.value}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

var existe = false ;
var myChart = '';
function plotarGrafico(resposta) {
    if (existe == true) {
        myChart.destroy();
    }

    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [
        {
            label: 'Valor',
            data: [],
            fill: false,
            borderColor: 'rgb(199, 52, 52)',
            borderWidth: 4
        }]
        
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "cotarBanco" e passados para "plotarGrafico":')
    console.log(resposta)
    


    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        dados.datasets[0].data.push(registro.media);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'line',
        data: dados,
    };

    // Adicionando gráfico criado em div na tela
    myChart = new Chart(
        document.getElementById(`banco`),
        config
    );
    myChart.update()
    existe = true;
}

