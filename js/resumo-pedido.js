// função pedido pipoca simples-----------------------------------------------------------------------

function mostrarNumeroPipocaSimples(){
    input = parseFloat(document.getElementById("numero-pipoca-simples").value);

    document.getElementById("numero-pedido-pipoca-simples").innerHTML = input;
    document.getElementById("pipoca-simples").style.display = "flex";
    document.getElementById("pipoca-simples").classList.remove("slide-out-left");

    valor = parseFloat(document.getElementById("valor-pipoca-simples").title).toFixed(2);

    valor = valor * input;
    document.getElementById("valor-pedido-pipoca-simples").innerHTML = valor;


    if (document.getElementById("numero-pipoca-simples").value < 1){
        document.getElementById("pipoca-simples").classList.add("slide-out-left");
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
    document.getElementById("pipoca-caramelizada").classList.remove("slide-out-left");

    valor = parseFloat(document.getElementById("valor-pipoca-caramelizada").title).toFixed(2);

    valor = valor * input;
    document.getElementById("valor-pedido-pipoca-caramelizada").innerHTML = valor;


    if (document.getElementById("numero-pipoca-caramelizada").value < 1){
        document.getElementById("pipoca-caramelizada").classList.add("slide-out-left");
    }
}

function mostrarNomePipocaCaramelizada(){
    pedido = document.getElementById("titulo-pedido-pipoca-caramelizada").title;

    document.getElementById("nome-pedido-pipoca-caramelizada").innerHTML = pedido;
}

// função pedido pipoca de chocolate------------------------------------------------------------------


function mostrarNumeroPipocaChocolate(){
    input = parseFloat(document.getElementById("numero-pipoca-chocolate").value);

    document.getElementById("numero-pedido-pipoca-chocolate").innerHTML = input;
    document.getElementById("pipoca-chocolate").style.display = "flex";
    document.getElementById("pipoca-chocolate").classList.remove("slide-out-left");

    valor = parseFloat(document.getElementById("valor-pipoca-chocolate").title).toFixed(2);

    valor = valor * input;
    document.getElementById("valor-pedido-pipoca-chocolate").innerHTML = valor;


    if (document.getElementById("numero-pipoca-chocolate").value < 1){
        document.getElementById("pipoca-chocolate").classList.add("slide-out-left");
    }
}

function mostrarNomePipocaChocolate(){
    pedido = document.getElementById("titulo-pedido-pipoca-chocolate").title;

    document.getElementById("nome-pedido-pipoca-chocolate").innerHTML = pedido;
}

// função pedido pipoca coca------------------------------------------------------------------


function mostrarNumeroCoca(){
    input = parseFloat(document.getElementById("numero-coca").value);

    document.getElementById("numero-pedido-coca").innerHTML = input;
    document.getElementById("coca").style.display = "flex";
    document.getElementById("coca").classList.remove("slide-out-left");

    valor = parseFloat(document.getElementById("valor-coca").title).toFixed(2);

    valor = valor * input;
    document.getElementById("valor-pedido-coca").innerHTML = valor;


    if (document.getElementById("numero-coca").value < 1){
        document.getElementById("coca").classList.add("slide-out-left");
    }
}

function mostrarNomeCoca(){
    pedido = document.getElementById("titulo-pedido-coca").title;

    document.getElementById("nome-pedido-coca").innerHTML = pedido;
}

// função pedido fanta------------------------------------------------------------------


function mostrarNumeroFanta(){
    input = parseFloat(document.getElementById("numero-fanta").value);

    document.getElementById("numero-pedido-fanta").innerHTML = input;
    document.getElementById("fanta").style.display = "flex";
    document.getElementById("fanta").classList.remove("slide-out-left");

    valor = parseFloat(document.getElementById("valor-fanta").title).toFixed(2);

    valor = valor * input;
    document.getElementById("valor-pedido-fanta").innerHTML = valor;


    if (document.getElementById("numero-fanta").value < 1){
        document.getElementById("fanta").classList.add("slide-out-left");
    }
}

function mostrarNomeFanta(){
    pedido = document.getElementById("titulo-pedido-fanta").title;

    document.getElementById("nome-pedido-fanta").innerHTML = pedido;
}
// função pedido pepsi------------------------------------------------------------------


function mostrarNumeroPepsi(){
    input = parseFloat(document.getElementById("numero-pepsi").value);

    document.getElementById("numero-pedido-pepsi").innerHTML = input;
    document.getElementById("pepsi").style.display = "flex";
    document.getElementById("pepsi").classList.remove("slide-out-left");

    valor = parseFloat(document.getElementById("valor-pepsi").title).toFixed(2);

    valor = valor * input;
    document.getElementById("valor-pedido-pepsi").innerHTML = valor;


    if (document.getElementById("numero-pepsi").value < 1){
        document.getElementById("pepsi").classList.add("slide-out-left");
    }
}

function mostrarNomePepsi(){
    pedido = document.getElementById("titulo-pedido-pepsi").title;

    document.getElementById("nome-pedido-pepsi").innerHTML = pedido;
}
