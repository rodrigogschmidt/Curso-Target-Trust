function teste() {
    console.log('Executou o teste')
}

function mudaDiv() {
    console.log('Mudou!')
    var retangulo = document.getElementById('retangulo');
    retangulo.innerHTML = 'Mudei o conteúdo!';
}

function alteraSecao(){
    console.log('Altera...')
    var secoes = document.getElementsByTagName('section');
    var cont = 0;
    while (cont < secoes.length) {
        secoes[cont].style.borderRadius = '50%';
                if (cont % 2 == 1) {
            secoes[cont].style.background = 'green';
        } else{
        }
            cont ++;
    }
}

function mostraCaixa() {
    var caixas = document.getElementsByClassName('caixa');
    for (var cont=0; cont < caixas.length; cont++) {
        caixas[cont].style.display = 'inline-block';
    }
}
function alteraTudo() {
    // sempre sintaxe de seletores CSS dentro do parenteses
    var retangulo = document.querySelectorAll('#retangulo')[0];
    var caixas = document.querySelectorAll('.caixa');
    retangulo.innerHTML = 'Mudei novamente...';
    var secoes = document.querySelectorAll('section');
    for (var cont = 0; cont < secoes.length; cont++) {
        secoes[cont].innerHTML = 'S ' + cont; 
        caixas[cont].style.display = 'inline-block';
        caixas[cont].style.background = 'yellow';
    }
}