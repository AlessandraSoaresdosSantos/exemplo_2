btnEnviar.addEventListener('click', function(e) {

    var elemento = document.getElementById('dataNascimento');
    var data = new Date(elemento.value);
    var idade = undefined;

    //proposta de resolução - 1
    var data_diferenca = Date.now() - data.getTime();
    idade = Math.floor(data_diferenca /
        (1000 * 60 * 60 * 24 * 365.25));

    //proposta de resolução - 2
    idade = Math.floor(moment(new Date()).diff(moment(data), 'years', true));

    //proposta de resolução - 3
    idade = Math.floor(idade.getUTCFullYear() - 1970);
});