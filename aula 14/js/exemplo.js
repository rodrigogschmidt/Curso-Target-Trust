function mudaElemento() {
var quadrado = document.getElementById('quadrado'); 

if(quadrado.classList.contains('bolinha')){
    quadrado.classList.remove('bolinha');
} else {
    quadrado.classList.add('bolinha');
}
}
var botao = document.getElementById('botao');
botao.onclick = mudaElemento;
