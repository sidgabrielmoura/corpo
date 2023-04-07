let botao = document.querySelector('#submit')

function enviar(){
    let nome = document.querySelector('#name').value
    let senha = document.querySelector('#password').value

    if(nome != '' && senha != ''){
        alert('olá! ' + nome)
        confirm(`sua senha é "${senha}" deseja salva-la?`)
    }else{
        alert('campos não preenchidos!')
    }
}