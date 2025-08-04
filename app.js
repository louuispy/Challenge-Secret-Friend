let amigos = [];

function adicionarAmigo() {
    let campoNome = document.querySelector("input")
    if (campoNome.value == "") {
        alert("Por favor, digite um nome!");
    } else {
        amigos.push('\n' +campoNome.value);
        exibirNomesAmigos();
        campoNome.value = "" ;
    };
};

function exibirNomesAmigos() {
    let listaAmigosTela = document.getElementById("listaAmigos");
    listaAmigosTela.innerHTML = "";

    for (let nome of amigos) {
        let li = document.createElement("li");
        li.innerHTML = nome;
        listaAmigosTela.appendChild(li);  
    };
};

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Por favor, adicione pelo menos um amigo!");
    } else {
        let amigoSecreto = parseInt(Math.random() * amigos.length);
        let amigoSorteado = amigos[amigoSecreto];
        let resultado = document.getElementById("resultado");
        let textoResultado = `O amigo secreto escolhido foi: ${amigoSorteado}`;
        resultado.innerHTML = textoResultado;
    };
    setTimeout(reiniciarJogo, 5000);
};

function reiniciarJogo() {
    window.location.reload();
};