function tabuada() {
    var numTab = Number(document.getElementById('iNum').value);
    if (numTab == '') {
        alert('Por favor, digite um número')
    } else {
        var tabuada = document.getElementById('iTabuada');
        tabuada.innerHTML = ''
        for (let count = 1; count <= 10; count++) {
            let opt = document.createElement('option');
            opt.setAttribute('value', `${count}x`)
            opt.text = `${numTab} x ${count} = ${numTab*count}`
            tabuada.appendChild(opt);
        }
    }    
}