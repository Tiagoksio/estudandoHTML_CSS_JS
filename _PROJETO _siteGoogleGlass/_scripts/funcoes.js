function mudaFoto(foto){
    document.getElementById("icone").src = foto;
}
function calc_total() {
    var qtd = parseInt(document.getElementById('iQtd').value);
    tot = qtd * 1500;
    document.getElementById('iTot').value = tot;
}
