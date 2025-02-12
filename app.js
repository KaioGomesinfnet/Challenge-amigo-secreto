//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.querySelector('input').value;
    let erro = document.querySelector('h2');
    let lista = document.getElementById("listaAmigos");

    if (inputAmigo.length == 0) {
        erro.innerHTML = 'Por favor, insira um nome.';
    } else {
        erro.innerHTML = 'Digite o nome dos seus amigos!';
        amigos.push(inputAmigo);
        limparCampo();
        atualizarLista();
    }
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    
    if (amigos.length === 0) {
        resultado.innerHTML = "Nenhum amigo na lista para sortear.";
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}

