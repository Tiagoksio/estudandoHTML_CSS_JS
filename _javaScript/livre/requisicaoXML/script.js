let submeter = document.getElementById('submeter');
submeter.addEventListener('click', consultarCEP);
function consultarCEP() {
    var xhr = new XMLHttpRequest();
    let cep = document.getElementById('iCep').value;//entrada do cep digitado
    let url = "http://cep.la/"+cep;
    xhr.open ("GET", url, true);//método, url e se é assíncrono ou não
    xhr.setRequestHeader ("Accept", "application/json");//retorno do header para json
    xhr.onreadystatechange = function(){//monitoramento
        if((xhr.readyState == 0 || xhr.readyState == 4) && xhr.status == 200)
        var cepTxt = xhr.responseText;
        let jsonResponse = JSON.parse(cepTxt);//converter para json
        document.getElementById('resultado').innerHTML = `<dl><dt>CEP<dd>${jsonResponse.cep}</dd></dt>
        <dt>UF<dd>${jsonResponse.uf}</dd></dt>
        <dt>CIDADE<dd>${jsonResponse.cidade}</dd></dt>
        <dt>BAIRRO<dd>${jsonResponse.bairro}</dd></dt>
        <dt>LOGRADOURO<dd>${jsonResponse.logradouro}</dd></dt>
        </dl>`
        document.getElementById('iCep').value = '';
        document.getElementById('iCep').focus();
        };
    xhr.send(null);
};