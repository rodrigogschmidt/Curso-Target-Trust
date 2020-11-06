//comentário em JS para uma linha
/*Ou assim em várias
linhas*/
var nome = 'Rodrigo Schmidt';
var idade = 26;
var salario = 5366.87;
var possuiHabilitacao = true;
var genero = 'M';
var enderecoCompleto = 'Rua dos Andradas, 59';
var sobrenome;

//enviam mensagens no console do browser, que são úteis ao desenvolvedor
console.log('Valor do salário é:',salario);

//operações aritméticas (+ , - , * , / , % "MOD" )
//muito importante saber que o JS não é uma linguagem ideal para cálculos matemáticos precisos!
var bonus = salario*0.5;
var idadeImpar = idade % 2 == 1;
//condicionais
if (idade>=18) {
    console.log('PODE DIRIGIR!!!');
} else {
    console.log('NÃO PODE DIRIGIR!!!')
}

//repeticoes
for(var cont=1; cont<=10; cont++){
    console.log(cont)
}

//comparadores
// > , < , >= , <= , != , == 
