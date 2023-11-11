var esquerda = document.getElementById("frame1");
var direita = document.getElementById("frame2");

var botaoesquerda = document.getElementById("botaoesquerda");
var botaodireita = document.getElementById("botaodireita");
var bola1 = document.getElementById("bola1");
var bola2 = document.getElementById("bola2");

function esquerda() {
  if (esquerda.style.display === "none") {
    esquerda.style.display = "flex";
    direita.style.display = "none";
    botaoesquerda.style.opacity = "0.3";
    botaodireita.style.opacity = "1";
    bola1.style.backgroundColor = "goldenrod";
    bola2.style.backgroundColor = "gray";
  } else {
    esquerda.style.display = "flex";
    direita.style.display = "none";
    botaoesquerda.style.opacity = "0.3";
    botaodireita.style.opacity = "1";
    bola1.style.backgroundColor = "gold";
    bola2.style.backgroundColor = "gray";
  }
}

function scrollRight() {
  if (direita.style.display === "none") {
    direita.style.display = "flex";
    esquerda.style.display = "none";
    botaodireita.style.opacity = "0.3";
    botaoesquerda.style.opacity = "1";
    bola2.style.backgroundColor = "gold";
    bola1.style.backgroundColor = "gray";
  } else {
    direita.style.display = "flex";
    esquerda.style.display = "none";
    botaodireita.style.opacity = "0.3";
    botaoesquerda.style.opacity = "1";
    bola2.style.backgroundColor = "gold";
    bola1.style.backgroundColor = "gray";
  }
}
