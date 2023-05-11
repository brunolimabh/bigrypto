function simular() {
    var reais = Number(ipt_valor_simulacao.value);
    var cripto = criptomoeda.value;
    // var data = data.value;
    var valorUsuario = Number(ipt_valor_simulacao.value);
    var valorCripto = Number(0);
    var totalMoeda = Number(0);
    var valor_cripto_atual = Number(0);
    var total_atual = Number(0);

    if (cripto == "Dolar") {
        if (data.value == "2017") {
            valorCripto = 3.1920;
        } else if (data.value == "2018") {
            valorCripto = 3.6542;
        } else if (data.value == "2019") {
            valorCripto = 3.9451;
        } else if (data.value == "2020") {
            valorCripto = 5.1558;
        } else if (data.value == "2021") {
            valorCripto = 5.3950;
        } else if (data.value == "2022") {
            valorCripto = 5.4669;
        }
    } else if (cripto == "Bitcoin") {
        if (data.value == "2017") {
            valorCripto = 2508;
        } else if (data.value == "2018") {
            valorCripto = 12599.53;
        } else if (data.value == "2019") {
            valorCripto = 12507;
        } else if (data.value == "2020") {
            valorCripto = 24645;
        } else if (data.value == "2021") {
            valorCripto = 145000;
        } else if (data.value == "2022") {
            valorCripto = 82379;
        }
    } else if (cripto == "Ethereum") {
        if (data.value == "2017") {
            valorCripto = 1222.672;
        } else if (data.value == "2018") {
            valorCripto = 16516.25;
        } else if (data.value == "2019") {
            valorCripto = 518.1691;
        } else if (data.value == "2020") {
            valorCripto = 2236.645;
        } else if (data.value == "2021") {
            valorCripto = 12578.56215;
        } else if (data.value == "2022") {
            valorCripto = 12023.3;
        }
    } else if (cripto == "Solana") {
        if (data.value == "2020") {
            valorCripto = 12.2855;
        } else if (data.value == "2021") {
            valorCripto = 554.79;
        } else if (data.value == "2022") {
            valorCripto = 504.135;
        }
    }


    totalMoeda = valorUsuario / valorCripto;
    
    if (cripto == "Dolar") {
        valor_cripto_atual = 5.04;
    } else if (cripto == "Bitcoin") {
        valor_cripto_atual = 145107.11;
    } else if (cripto == "Ethereum") {
        valor_cripto_atual = 9444.13;
    } else if (cripto == "Solana") {
        valor_cripto_atual = 112.78;
    } 

    total_atual = totalMoeda * valor_cripto_atual;

    if (reais == '' || isNaN(reais)) {
        erroReal.style.display = 'block';
    } else {
        erroReal.style.display = 'none';

        if (cripto == "Solana" && data.value == "2017" || cripto == "Solana" && data.value == "2018" || cripto == "Solana" && data.value == "2019") {
            msg_simulacao.innerHTML = `Caso deseje simular uma cotação da moeda Solana, opte pelos anos acima de 2020, pois foi o seu ano de lançamento!`;
            ano_simulacao.innerHTML = ``;
        valor_antigo_simulacao.innerHTML = ``;
        valor_novo_simulacao.innerHTML = ``;
        } else {
            msg_simulacao.innerHTML = `Caso você tivesse comprado 
    R$${reais.toFixed(2)} da criptomoeda ${cripto} no ano 
    de ${data.value}, você teria aproximadamente ${totalMoeda.toFixed(5)} ${cripto} naquela época. <br><br>
    Agora, no ano de 2023, com ${totalMoeda.toFixed(5)} ${cripto}, você teria aproximadamente R$${total_atual.toFixed(2)}!`;

        ano_simulacao.innerHTML = `${data.value}`;
        valor_antigo_simulacao.innerHTML = `R$${reais.toFixed(2)}`
        valor_novo_simulacao.innerHTML = `R$${total_atual.toFixed(2)}`
        }

    }
    
}