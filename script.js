const produto = document.querySelector('#produto1');
const botão = document.querySelector('.btn1');

function alertar(){
    alert('Você comprou o ' + produto.textContent)
}

botão.addEventListener('click', alertar);