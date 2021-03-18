function multiplica( n1, n2) {
    var produto = n1*n2
    return produto
}
function verifica() {
    var saida = document.getElementById('res')
    var n01 = Number(document.getElementById('iNum01').value)
    var n02 = Number(document.getElementById('iNum02').value)
    var res = multiplica(n01, n02)
    saida.innerHTML = `Seu produto de ${n01} e ${n02} é ${res}`
}
