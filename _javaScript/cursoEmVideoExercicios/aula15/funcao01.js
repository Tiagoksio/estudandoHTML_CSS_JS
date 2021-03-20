function parImpar(n) { //declarando função com parâmetro e retorno
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
function soma (n1=0, n2=0) { //parâmetros opcionais para caso não seja enviado o parâmetro
    return n1 + n2
}
var divisao = function (n1, n2) { // variavel como função
    if (n1 != 0 && n2 != 0) {
        return n1 / n2   
    }
    return 'Parâmetros inválidos!'
}
// function fatorial(n) {
//     let fat = 1
//     for (let index = n; index > 1; index--) {
//         fat *= index        
//     }
//     return fat
// }
function fatorial(n) {
    if (n == 1) {
        return 1;        
    } else {
        return n * fatorial(n - 1); // Função recursiva
    }
}

console.log(fatorial(5))
console.log(divisao(0, 2))
console.log(parImpar(5))
console.log(soma(5))