function esquerda() {
  let esquerda = document.getElementById("frame1");
  let direita = document.getElementById("frame2");

  let botaoesquerda = document.getElementById("botaoesquerda");
  let botaodireita = document.getElementById("botaodireita");
  let bola1 = document.getElementById("bola1");
  let bola2 = document.getElementById("bola2");
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
  let esquerda = document.getElementById("frame1");
  let direita = document.getElementById("frame2");

  let botaoesquerda = document.getElementById("botaoesquerda");
  let botaodireita = document.getElementById("botaodireita");
  let bola1 = document.getElementById("bola1");
  let bola2 = document.getElementById("bola2");
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
