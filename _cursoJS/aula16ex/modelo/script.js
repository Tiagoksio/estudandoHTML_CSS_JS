let bAdd = document.querySelector('input#iAdd');
let bFin = document.querySelector('input#iFin');
let num = document.querySelector('input#iNum');
let lista = document.querySelector('select#iLista');
let res = document.querySelector('div#res');
let valores = [];
bAdd.addEventListener('click', adicionar);
bFin.addEventListener('click', finalizar);
//verifica se o número informado esta entre os valores válidos
function numCheck(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}
//verifica se o número já esta na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}
function soma(vet) {
    let somaNumero = 0; 
    for (numVet of vet) {
         somaNumero += numVet;
    }
    return somaNumero;
}
//Adição de valores
function adicionar() {
    if (numCheck(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let opt = document.createElement('option');
        opt.setAttribute('value', `${num.value}`);
        opt.text = `Valor ${num.value} adicionado`;
        lista.appendChild(opt);
        res.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista');
    }
    num.value = '';
    num.focus();
}
function finalizar() {
    if (valores.length == 0) {
        alert('Insira no mínimo um número para que a análise possa ser efetuada')
    } else {
        valores.sort();
        let tot = valores.length;
        let maior;
        if (valores.indexOf(100) != -1) { //gabiarra porque o 100 não sai no sort().
            maior = 100;
        } else {
            maior = valores[valores.length - 1];
        }
        let menor = valores[0];
        let somaTot = soma(valores);
        let media = somaTot / tot;
        res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados;<br>
                        O maior valor informado foi ${maior};<br>
                        O menor valor informado foi ${menor};<br>
                        Somando todos os valores, temos ${somaTot};<br>
                        A média dos valores digitados é ${media}.</p>`
    }
}