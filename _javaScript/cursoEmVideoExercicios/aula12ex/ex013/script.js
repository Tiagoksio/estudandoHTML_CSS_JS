function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}.`
    if (hora < 12) {
        msg.innerHTML += ' Bom dia!'
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        msg.innerHTML += ' Boa tarde!'
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML += ' Boa noite!'
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}
