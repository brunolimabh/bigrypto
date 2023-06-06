var timer = 0;
var tempo = 0
function start() {
    imgNuvem.classList.add('nuvem');
    imgMario.classList.add('mario');
    imgMoeda.classList.add('moeda');
    telaFundo.style.display = 'none';

    const mario = document.querySelector('.mario');
    const moeda = document.querySelector('.moeda');
    const nuvem = document.querySelector('.nuvem');

    const jump = () => {
        mario.classList.add('jump')
        setTimeout(() => {
            mario.classList.remove('jump')
        }, 500)
    }

    setInterval(timer++, 1);

    const loop = setInterval(() => {
        const moedaPosition = moeda.offsetLeft; /*pegar o deslocamento esquerdo da moeda*/
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); /* pegar o estilo que foi computado na imagem do mario */
        const nuvemPosition = nuvem.offsetLeft; /*pegar o deslocamento esquerdo da moeda*/

        if (moedaPosition <= 120 && moedaPosition > 0 && marioPosition < 80) {
            moeda.style.animation = 'none';
            moeda.style.left = `${moedaPosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = '../img/marioOver.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            nuvem.style.animation = 'none';
            nuvem.style.left = `${nuvemPosition}px`;

            btnTempo.style.display = 'block';
            btnStart.style.display = 'none';
            clearInterval(loop);
        }
    }, 10);
    document.addEventListener('keydown', jump) /* quando a tecla abaixar no teclado*/
}

function guardarTempo() {
    imgNuvem.classList.remove('nuvem');
    imgMario.classList.remove('mario');
    imgMoeda.classList.remove('moeda');
    telaFundo.style.display = 'block';
    btnTempo.style.display = 'none';
    // btnStart.style.display = 'block';


    idUsuario = sessionStorage.ID_USUARIO;
    tempo = timer;

    fetch("/mario/guardarTempo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuario,
            tempoServer: tempo
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            // cardErro.style.display = "block";
            // mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
            // limparFormulario();
            // finalizarAguardar();
            location.reload();
        } else {
            throw ("Houve um erro ao guardar o tempo!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
    });

}


function ranking() {
    fetch(`/mario/ranking`).then(function (response) {
        if (response.ok) {
    console.log(response);

            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                ordenarRanking(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado no Ranking');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

var listaRanking = []

function ordenarRanking(resposta) {
    listaRanking = resposta;
    listaRanking.sort(function (a, b) {
        if (a.tempo > b.tempo) {
            return -1;
        }
        if (a.tempo < b.tempo) {
            return 1;
        }
        return 0;
    });
    console.log(listaRanking);
    nomeP.innerHTML = listaRanking[0].nome;
    secP.innerHTML = listaRanking[0].tempo;
    nomeS.innerHTML = listaRanking[1].nome;
    secS.innerHTML = listaRanking[1].tempo;
    nomeT.innerHTML = listaRanking[2].nome;
    secT.innerHTML = listaRanking[2].tempo;



}
