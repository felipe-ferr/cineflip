function showbarbie(){

    var oppen = document.getElementById("oppenfilme");
    var barbie = document.getElementById("barbiefilme");
    var mario = document.getElementById("mariofilme");
    var freira = document.getElementById("freirafilme");
    var paw = document.getElementById("pawfilme");

    if (barbie.style.display === "none"){
        barbie.style.display = "flex";
        oppen.style.display = "none";
        mario.style.display = "none";
        freira.style.display = "none";
        paw.style.display = "none";
    }
    else{
        oppen.style.display = "none";
        mario.style.display = "none";
        freira.style.display = "none";
        paw.style.display = "none";
        barbie.style.display = "flex";
    }
}

function showoppenheimer(){

    var oppen = document.getElementById("oppenfilme");
    var barbie = document.getElementById("barbiefilme");
    var mario = document.getElementById("mariofilme");
    var freira = document.getElementById("freirafilme");
    var paw = document.getElementById("pawfilme");

    if (oppen.style.display === "none"){
        oppen.style.display = "flex";
        barbie.style.display = "none";
        mario.style.display = "none";
        freira.style.display = "none";
        paw.style.display = "none";
    }
    else{
        barbie.style.display = "none";
        freira.style.display = "none";
        mario.style.display = "none";
        paw.style.display = "none";
        oppen.style.display = "flex";
    }
}
function showmario(){

    var oppen = document.getElementById("oppenfilme");
    var barbie = document.getElementById("barbiefilme");
    var mario = document.getElementById("mariofilme");
    var freira = document.getElementById("freirafilme");
    var paw = document.getElementById("pawfilme");

    if (mario.style.display === "none"){
        mario.style.display = "flex";
        barbie.style.display = "none";
        oppen.style.display = "none";
        freira.style.display = "none";
        paw.style.display = "none";
    }
    else{
        barbie.style.display = "none";
        freira.style.display = "none";
        oppen.style.display = "none";
        paw.style.display = "none";
        mario.style.display = "flex";
    }
}
function showfreira(){

    var oppen = document.getElementById("oppenfilme");
    var barbie = document.getElementById("barbiefilme");
    var mario = document.getElementById("mariofilme");
    var freira = document.getElementById("freirafilme");
    var paw = document.getElementById("pawfilme");

    if (freira.style.display === "none"){
        freira.style.display = "flex";
        barbie.style.display = "none";
        oppen.style.display = "none";
        mario.style.display = "none";
        paw.style.display = "none";
    }
    else{
        barbie.style.display = "none";
        mario.style.display = "none";
        oppen.style.display = "none";
        paw.style.display = "none";
        freira.style.display = "flex";
    }
}
function showpaw(){

    var oppen = document.getElementById("oppenfilme");
    var barbie = document.getElementById("barbiefilme");
    var mario = document.getElementById("mariofilme");
    var freira = document.getElementById("freirafilme");
    var paw = document.getElementById("pawfilme");

    if (paw.style.display === "none"){
        paw.style.display = "flex";
        barbie.style.display = "none";
        mario.style.display = "none";
        freira.style.display = "none";
        oppen.style.display = "none";
    }
    else{
        barbie.style.display = "none";
        freira.style.display = "none";
        mario.style.display = "none";
        oppen.style.display = "none";
        paw.style.display = "flex";
    }
}


  