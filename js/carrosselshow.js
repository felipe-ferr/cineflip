function scrollRight(){
    var esquerda = document.getElementById('frame1');
    var direita = document.getElementById('frame2');

    if (esquerda.style.display === "none"){
        esquerda.style.display = "flex";
        direita.style.display = "none";
    }
    else{
        esquerda.style.display = "flex";
        direita.style.display = "none";
    }
}

function esquerda(){
    var esquerda = document.getElementById('frame1');
    var direita = document.getElementById('frame2');

    if (direita.style.display === "none"){
        direita.style.display = "flex";
        esquerda.style.display = "none";
    }
    else{
        direita.style.display = "flex";
        esquerda.style.display = "none";
    }
}