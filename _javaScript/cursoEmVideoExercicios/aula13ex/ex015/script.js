function contar() {
    var inicio = Number(document.getElementById('iInicio').value);
    var fim = Number(document.getElementById('iFim').value);
    var passo = Number(document.getElementById('iPasso').value);
    var resposta = document.getElementById('res');
    //validação
    if(passo == 0 || passo == '') {
        alert('[ERRO] Informe um número válido para iniciar a contagem!')
    //contagem crescente
    } else if (fim > inicio) {
        resposta.innerHTML = 'Contando: '
        for (let init = inicio; init < fim; init += passo) {
            resposta.innerHTML += `${init} &#x1f449` //Emoji via html
        }
    //contagem decrescente
    } else {
        resposta.innerHTML = 'Contando: '
        for (let init = inicio; init > fim; init -= passo) {
            resposta.innerHTML += `${init} &#x1f449`
        }
    }
    resposta.innerHTML += `\u{1f3c1}` // Emoji via js
}

