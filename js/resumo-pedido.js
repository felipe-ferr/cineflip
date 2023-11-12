    pipoca = 0;
    caramelizada = 0;
    choco = 0;
    coca = 0;
    fanta = 0;
    pepsi = 0;
    mm = 0;
    kitkat = 0;
    sorvete = 0;
    swift = 0;
    halloween = 0;
    mario = 0;
// função pedido pipoca simples-----------------------------------------------------------------------

function mostrarNumeroPipocaSimples(){
    input = parseFloat(document.getElementById("numero-pipoca-simples").value);

    document.getElementById("numero-pedido-pipoca-simples").innerHTML = input;
    document.getElementById("pipoca-simples").style.display = "flex";
    document.getElementById("pipoca-simples").classList.remove("slide-out-left");

    pipoca = parseFloat(document.getElementById("valor-pipoca-simples").title).toFixed(2);


    globalThis.pipoca = pipoca * input;
    document.getElementById("valor-pedido-pipoca-simples").innerHTML = pipoca;


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
    document.getElementById("pipoca-caramelizada").classList.remove("slide-out-left");

    caramelizada = parseFloat(document.getElementById("valor-pipoca-caramelizada").title).toFixed(2);


    globalThis.caramelizada = caramelizada * input;
    document.getElementById("valor-pedido-pipoca-caramelizada").innerHTML = caramelizada;


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

    choco = parseFloat(document.getElementById("valor-pipoca-chocolate").title).toFixed(2);

    globalThis.choco = choco * input;
    document.getElementById("valor-pedido-pipoca-chocolate").innerHTML = choco;


    if (document.getElementById("numero-pipoca-chocolate").value < 1){
        document.getElementById("pipoca-chocolate").classList.add("slide-out-left");
    }
}

function mostrarNomePipocaChocolate(){
    pedido = document.getElementById("titulo-pedido-pipoca-chocolate").title;

    document.getElementById("nome-pedido-pipoca-chocolate").innerHTML = pedido;
}

// função pedido coca------------------------------------------------------------------


function mostrarNumeroCoca(){
    input = parseFloat(document.getElementById("numero-coca").value);

    document.getElementById("numero-pedido-coca").innerHTML = input;
    document.getElementById("coca").style.display = "flex";
    document.getElementById("coca").classList.remove("slide-out-left");

    coca = parseFloat(document.getElementById("valor-coca").title).toFixed(2);

    globalThis.coca = coca * input;
    document.getElementById("valor-pedido-coca").innerHTML = coca;
    

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

    fanta = parseFloat(document.getElementById("valor-fanta").title).toFixed(2);

    globalThis.fanta = fanta * input;
    document.getElementById("valor-pedido-fanta").innerHTML = fanta;


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

    pepsi = parseFloat(document.getElementById("valor-pepsi").title).toFixed(2);

    globalThis.pepsi = pepsi * input;
    document.getElementById("valor-pedido-pepsi").innerHTML = pepsi;


    if (document.getElementById("numero-pepsi").value < 1){
        document.getElementById("pepsi").classList.add("slide-out-left");
    }
}

function mostrarNomePepsi(){
    pedido = document.getElementById("titulo-pedido-pepsi").title;

    document.getElementById("nome-pedido-pepsi").innerHTML = pedido;
}

// função pedido mm------------------------------------------------------------------


function mostrarNumeroMM(){
    input = parseFloat(document.getElementById("numero-mm").value);

    document.getElementById("numero-pedido-mm").innerHTML = input;
    document.getElementById("mm").style.display = "flex";
    document.getElementById("mm").classList.remove("slide-out-left");

    mm = parseFloat(document.getElementById("valor-mm").title).toFixed(2);

    globalThis.mm = mm * input;
    document.getElementById("valor-pedido-mm").innerHTML = mm;


    if (document.getElementById("numero-mm").value < 1){
        document.getElementById("mm").classList.add("slide-out-left");
    }
}

function mostrarNomeMM(){
    pedido = document.getElementById("titulo-pedido-mm").title;

    document.getElementById("nome-pedido-mm").innerHTML = pedido;
}

// função pedido kitkat------------------------------------------------------------------


function mostrarNumeroKitkat(){
    input = parseFloat(document.getElementById("numero-kitkat").value);

    document.getElementById("numero-pedido-kitkat").innerHTML = input;
    document.getElementById("kitkat").style.display = "flex";
    document.getElementById("kitkat").classList.remove("slide-out-left");

    kitkat = parseFloat(document.getElementById("valor-kitkat").title).toFixed(2);

    globalThis.kitkat = kitkat * input;
    document.getElementById("valor-pedido-kitkat").innerHTML = kitkat;


    if (document.getElementById("numero-kitkat").value < 1){
        document.getElementById("kitkat").classList.add("slide-out-left");
    }
}

function mostrarNomeKitkat(){
    pedido = document.getElementById("titulo-pedido-kitkat").title;

    document.getElementById("nome-pedido-kitkat").innerHTML = pedido;
}

// função pedido sorvete------------------------------------------------------------------


function mostrarNumeroSorvete(){
    input = parseFloat(document.getElementById("numero-sorvete").value);

    document.getElementById("numero-pedido-sorvete").innerHTML = input;
    document.getElementById("sorvete").style.display = "flex";
    document.getElementById("sorvete").classList.remove("slide-out-left");

    sorvete = parseFloat(document.getElementById("valor-sorvete").title).toFixed(2);

    globalThis.sorvete = sorvete * input;
    document.getElementById("valor-pedido-sorvete").innerHTML = sorvete;


    if (document.getElementById("numero-sorvete").value < 1){
        document.getElementById("sorvete").classList.add("slide-out-left");
    }
}

function mostrarNomeSorvete(){
    pedido = document.getElementById("titulo-pedido-sorvete").title;

    document.getElementById("nome-pedido-sorvete").innerHTML = pedido;
}

// função pedido swift------------------------------------------------------------------


function mostrarNumeroSwift(){
    input = parseFloat(document.getElementById("numero-swift").value);

    document.getElementById("numero-pedido-swift").innerHTML = input;
    document.getElementById("swift").style.display = "flex";
    document.getElementById("swift").classList.remove("slide-out-left");

    swift = parseFloat(document.getElementById("valor-swift").title).toFixed(2);

    globalThis.swift = swift * input;
    document.getElementById("valor-pedido-swift").innerHTML = swift;



    if (document.getElementById("numero-swift").value < 1){
        document.getElementById("swift").classList.add("slide-out-left");
    }
}

function mostrarNomeSwift(){
    pedido = document.getElementById("titulo-pedido-swift").title;

    document.getElementById("nome-pedido-swift").innerHTML = pedido;
}

// função pedido halloween------------------------------------------------------------------

function mostrarNumeroHalloween(){
    input = parseFloat(document.getElementById("numero-halloween").value);

    document.getElementById("numero-pedido-halloween").innerHTML = input;
    document.getElementById("halloween").style.display = "flex";
    document.getElementById("halloween").classList.remove("slide-out-left");

    halloween = parseFloat(document.getElementById("valor-halloween").title).toFixed(2);

    globalThis.halloween = halloween * input;
    document.getElementById("valor-pedido-halloween").innerHTML = halloween;
    


    if (document.getElementById("numero-halloween").value < 1){
        document.getElementById("halloween").classList.add("slide-out-left");
    }
}

function mostrarNomeHalloween(){
    pedido = document.getElementById("titulo-pedido-halloween").title;

    document.getElementById("nome-pedido-halloween").innerHTML = pedido;
}

// função pedido mario------------------------------------------------------------------

function mostrarNumeroMario(){
    input = parseFloat(document.getElementById("numero-mario").value);

    document.getElementById("numero-pedido-mario").innerHTML = input;
    document.getElementById("mario").style.display = "flex";
    document.getElementById("mario").classList.remove("slide-out-left");

    mario = parseFloat(document.getElementById("valor-mario").title).toFixed(2);

    globalThis.mario = mario * input;
    document.getElementById("valor-pedido-mario").innerHTML = mario;



    if (document.getElementById("numero-mario").value < 1){
        document.getElementById("mario").classList.add("slide-out-left");
    }
}

function mostrarNomeMario(){
    pedido = document.getElementById("titulo-pedido-mario").title;

    document.getElementById("nome-pedido-mario").innerHTML = pedido;
}


function valorfinal(){

    

    valortotal = pipoca + caramelizada + choco + coca + fanta + pepsi + mm + kitkat + sorvete + swift + halloween + mario;
   

        document.getElementById("valor-total").innerHTML = "R$" + valortotal + ",00";
    

}
