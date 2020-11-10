function validaForm() {
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var mensagem = document.getElementById('mensagem');
    var erro = document.getElementById('erro');

    // validar o nome
    if (nome.value == '') {
        erro.innerHTML = '*Preencha seu nome!';
        nome.focus();
        return false;
    }

    // validar o email
    if (email.value == '') {
        erro.innerHTML = '*Preencha seu e-mail!';
        email.focus();
        return false;
    }


    //validar a mensagem
    if (mensagem.value == '') {
        erro.innerHTML = '*Escreva uma mensagem!';
        mensagem.focus();
        return false;
    }
    
    //se tudo der certo bem na validação
    //return true;
    return false;
}