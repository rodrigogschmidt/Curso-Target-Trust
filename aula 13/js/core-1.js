function mostraData(){
var data = new Date();

var hora = data.getHours();
if (hora < 10) {
    hora = '0' + hora;
}
var min = data.getMinutes();
if (min < 10) {
    min = '0' + min;
}
var seg = data.getSeconds();
if (seg < 10) {
    seg = '0' + seg
}

var dia = data.getDate();
var mes = data.getMonth () + 1; // soma +1 pois o JS informa como vetor
var ano = data.getFullYear();

var calendario = document.getElementById('calendario');
calendario.innerHTML = dia + '/' + mes + '/' + ano;

var relogio = document.getElementById('relogio');
relogio.innerHTML = hora + ':' + min + ':' + seg;
}

// temporizador para atualizar a data e a hora
setInterval(mostraData, 1000);