function showclientes(){
    var clientes = document.getElementById('cliente');
    var ingressos = document.getElementById('ingresso');

    if (clientes.style.display === "none"){
        clientes.style.display = "flex";
        ingressos.style.display = "none";
    }
    else{
        clientes.style.display = "flex";
        ingressos.style.display = "none";
    }
}

function showingressos(){
    var clientes = document.getElementById('cliente');
    var ingressos = document.getElementById('ingresso');

    if (ingressos.style.display === "none"){
        ingressos.style.display = "flex";
        clientes.style.display = "none";
    }
    else{
        ingressos.style.display = "flex";
        clientes.style.display = "none";
    }
}