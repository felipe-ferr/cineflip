function showpedidos(){
    var pedidos = document.getElementById('maispedidos');
    var promos = document.getElementById('promos');

    if (pedidos.style.display === "none"){
        pedidos.style.display = "flex";
        promos.style.display = "none";
    }
    else{
        pedidos.style.display = "flex";
        promos.style.display = "none";
    }
}

function showpromos(){
    var pedidos = document.getElementById('maispedidos');
    var promos = document.getElementById('promos');

    if (promos.style.display === "none"){
        promos.style.display = "flex";
        pedidos.style.display = "none";
    }
    else{
        promos.style.display = "flex";
        pedidos.style.display = "none";
    }
}