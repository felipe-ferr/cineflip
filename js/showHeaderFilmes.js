var oppen = document.getElementById("oppenfilme");
var barbie = document.getElementById("barbiefilme");
var mario = document.getElementById("mariofilme");
var freira = document.getElementById("freirafilme");
var paw = document.getElementById("pawfilme");

function showbarbie() {

    if (barbie.style.display === "none") {
        barbie.style.display = "flex";
        mario.style.display = oppen.style.display = freira.style.display = paw.style.display = "none";
    }
    else {
        mario.style.display = oppen.style.display = freira.style.display = paw.style.display = "none";
        barbie.style.display = "flex";
    }
}

function showoppenheimer() {

    if (oppen.style.display === "none") {
        mario.style.display = barbie.style.display = freira.style.display = paw.style.display = "none";
    }
    else {
        mario.style.display = barbie.style.display = freira.style.display = paw.style.display = "none";
        oppen.style.display = "flex";
    }
}
function showmario() {

    if (mario.style.display === "none") {
        mario.style.display = "flex";
        barbie.style.display = oppen.style.display = freira.style.display = paw.style.display = "none";
    }
    else {
        barbie.style.display = oppen.style.display = freira.style.display = paw.style.display = "none";
        mario.style.display = "flex";
    }
}
function showfreira() {

    if (freira.style.display === "none") {
        freira.style.display = "flex";
        mario.style.display = oppen.style.display = barbie.style.display = paw.style.display = "none";
    }
    else {
        mario.style.display = oppen.style.display = barbie.style.display = paw.style.display = "none";
        freira.style.display = "flex";
    }
}
function showpaw() {

    if (paw.style.display === "none") {
        paw.style.display = "flex";
        mario.style.display = oppen.style.display = freira.style.display = barbie.style.display = "none";
    }
    else {
        mario.style.display = oppen.style.display = freira.style.display = barbie.style.display = "none";
        paw.style.display = "flex";
    }
}


