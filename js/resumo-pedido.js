// função pedido pipoca simples

function mostrarNumeroPipocaSimples(){
    input = parseFloat(document.getElementById("numero-pipoca-simples").value);

    document.getElementById("numero-pedido-pipoca-simples").innerHTML = input;
    document.getElementById("pipoca-simples").style.display = "flex";

    valor = parseFloat(document.getElementById("valor-pipoca-simples").title).toFixed(2);

    valor = valor * input;
    document.getElementById("valor-pedido-pipoca-simples").innerHTML = valor;


    if (document.getElementById("numero-pipoca-simples").value < 1){
        document.getElementById("pipoca-simples").style.display = "none";
    }
}

function mostrarNomePipocaSimples(){
    pedido = document.getElementById("titulo-pedido-pipoca-simples").title;

    document.getElementById("nome-pedido-pipoca-simples").innerHTML = pedido;
}


// função pedido pipoca caramelizada------------------------------------------------------------------

function mostrarNumeroPipocaCaramelizada(){
    input = parseFloat(document.getElementById("numero-pipoca-caramelizada").value);

    document.getElementById("numero-pedido-pipoca-caramelizada").innerHTML = input;
    document.getElementById("pipoca-caramelizada").style.display = "flex";

    valor = parseFloat(document.getElementById("valor-pipoca-caramelizada").title).toFixed(2);

    valor = valor * input;
    document.getElementById("valor-pedido-pipoca-caramelizada").innerHTML = valor;


    if (document.getElementById("numero-pipoca-caramelizada").value < 1){
        document.getElementById("pipoca-caramelizada").style.display = "none";
    }
}

function mostrarNomePipocaCaramelizada(){
    pedido = document.getElementById("titulo-pedido-pipoca-caramelizada").title;

    document.getElementById("nome-pedido-pipoca-caramelizada").innerHTML = pedido;
}


