function comprarIngresso(inputQuantidadeIngresso, tipoDeQuantidadeIngresso) {
    if(inputQuantidadeIngresso > parseInt(tipoDeQuantidadeIngresso.textContent)) {
        alert('Essa quantidade de ingressos não está disponível!');
    } else {
        alert('Compra realizada com sucesso!')
        tipoDeQuantidadeIngresso.innerHTML = `${parseInt(tipoDeQuantidadeIngresso.textContent) - inputQuantidadeIngresso}`;
    }
}

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    if(quantidadeIngresso <= 0) {
        alert('Insira uma quantidade válida!')
    } else if(quantidadeIngresso > 10) {
        alert('Você não pode comprar mais que 10 ingressos de uma vez!')
    } else {
        if(tipoIngresso == 'pista') {
            let quantidadePista = document.getElementById('qtd-pista');
            comprarIngresso(quantidadeIngresso, quantidadePista);
        } else if(tipoIngresso == 'inferior') {
            let quantidadeInferior = document.getElementById('qtd-inferior');
            comprarIngresso(quantidadeIngresso, quantidadeInferior);
        } else if(tipoIngresso == 'superior') {
            let quantidadeSuperior = document.getElementById('qtd-superior');
            comprarIngresso(quantidadeIngresso, quantidadeSuperior);
        }
    } 
}