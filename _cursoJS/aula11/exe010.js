function verificar() {
    var txtVel = document.querySelector('input#iTxtVel')
    var resposta = window.document.querySelector('div#res')
    var vel = Number(txtVel.value)
    res.innerHTML = `<p>Sua velocidade atual é de ${vel}km/h</p>`
    var via = document.querySelector('input[name="nVia"]:checked').value
    if (via == 'estrada' && (vel > 60 || vel < 30)) {
        res.innerHTML += '<p>Você está fora dos limites de velocidade da Estrada: min 30km/h e max 60km/h</p>'
    }else if(via == 'rodsimp' && (vel > 100 || vel < 50)) {
        res.innerHTML += '<p>Você está fora dos limites de velocidade da Rodovia Simples: min 50km/h e max 100km/h</p>'
    }else if(via == 'roddup' && (vel > 120 || vel < 60)) {
        res.innerHTML += '<p>Você está fora dos limites de velocidade da Rodovia Dupla: min 60km/h e max 120km/h</p>'
    } else if(via == 'tranrap' && (vel > 80 || vel < 40)) {
        res.innerHTML += '<p>Você está fora dos limites de velocidade da Via de Transito Rápido: min 40km/h e max 80km/h</p>'
    } else if(via == 'art' && (vel > 60 || vel < 30)) {
        res.innerHTML += '<p>Você está fora dos limites de velocidade da Via Arterial: min 30km/h e max 60km/h</p>'
    } else if(via == 'colet' && (vel > 40 || vel < 20)) {
        res.innerHTML += '<p>Você está fora dos limites de velocidade da Via Coletora: min 20km/h e max 40km/h</p>'
    } else if(via == 'loc' && (vel > 30 || vel < 15)) {
        res.innerHTML += '<p>Você está fora dos limites de velocidade da Via Local: min 15km/h e max 30km/h</p>'
    } else {
        res.innerHTML += '<p>Você está na velocidade correta. Dirija com cuidado</p>'
    }
}
function limpar() {
    opcoes = document.querySelectorAll ('form input')
    opcoes.forEach(input => input.value = '');
    window.document.querySelector('div#res').innerHTML = ''
    document.getElementsByName('nVia').forEach(input => input.checked = false)
}