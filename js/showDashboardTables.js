function showclientes() {
  var clientes = document.getElementById("cliente");
  var ingressos = document.getElementById("ingresso");
  var pedidos = document.getElementById("pedido");

  if (clientes.style.display === "none") {
    clientes.style.display = "flex";
    ingressos.style.display = "none";
    pedidos.style.display = "none";
  } else {
    clientes.style.display = "flex";
    ingressos.style.display = "none";
    pedidos.style.display = "none";
  }
}

function showingressos() {
  var clientes = document.getElementById("cliente");
  var ingressos = document.getElementById("ingresso");
  var pedidos = document.getElementById("pedido");

  if (ingressos.style.display === "none") {
    ingressos.style.display = "flex";
    clientes.style.display = "none";
    pedidos.style.display = "none";
  } else {
    ingressos.style.display = "flex";
    clientes.style.display = "none";
    pedidos.style.display = "none";
  }
}

function showpedidos() {
  var clientes = document.getElementById("cliente");
  var ingressos = document.getElementById("ingresso");
  var pedidos = document.getElementById("pedido");

  if (pedidos.style.display === "none") {
    pedidos.style.display = "flex";
    clientes.style.display = "none";
    ingressos.style.display = "none";
  } else {
    pedidos.style.display = "flex";
    clientes.style.display = "none";
    ingressos.style.display = "none";
  }
}
