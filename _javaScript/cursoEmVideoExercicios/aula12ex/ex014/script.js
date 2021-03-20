function verificar() {
    var data = new Date()
    var anoNasc = Number(window.document.getElementById('iAnoNasc').value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (anoNasc > data.getFullYear() || anoNasc < 1880) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = data.getFullYear() - anoNasc
        var msg = document.getElementById('msg')
        var genero = document.querySelector('input[name="nGenero"]:checked').value
        if (genero == 'M') {
            msg.innerHTML = `Detectamos Homem com ${idade} anos`
            if (idade < 13) {
                img.setAttribute('src', './imagens/homem-crianca.png')
            } else if (idade < 20) {
                img.setAttribute('src', './imagens/homem-jovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', './imagens/homem-adulto.png')
            } else {
                img.setAttribute('src', './imagens/homem-idoso.png')
            }
        } else {
            msg.innerHTML = `Detectamos Mulher com ${idade} anos`
            if (idade < 13) {
                img.setAttribute('src', './imagens/mulher-crianca.png')
            } else if (idade < 20) {
                img.setAttribute('src', './imagens/mulher-jovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', './imagens/mulher-adulta.png')
            } else {
                img.setAttribute('src', './imagens/mulher-idosa.png')
            }
        }
        msg.appendChild(img)
    }
}
