function showbarbie(){

    var oppen = document.getElementById("oppenfilme");
    var barbie = document.getElementById("barbiefilme");
    var mario = document.getElementById("mariofilme");
    var freira = document.getElementById("freirafilme");

    if (barbie.style.display === "none"){
        barbie.style.display = "flex";
        oppen.style.display = "none";
        mario.style.display = "none";
        freira.style.display = "none";
    }
    else{
        oppen.style.display = "none";
        mario.style.display = "none";
        freira.style.display = "none";
        barbie.style.display = "flex";
    }
}

function showoppenheimer(){

    var oppen = document.getElementById("oppenfilme");
    var barbie = document.getElementById("barbiefilme");
    var mario = document.getElementById("mariofilme");
    var freira = document.getElementById("freirafilme");

    if (oppen.style.display === "none"){
        oppen.style.display = "flex";
        barbie.style.display = "none";
        mario.style.display = "none";
        freira.style.display = "none";
    }
    else{
        barbie.style.display = "none";
        freira.style.display = "none";
        mario.style.display = "none";
        oppen.style.display = "flex";
    }
}
function showmario(){

    var oppen = document.getElementById("oppenfilme");
    var barbie = document.getElementById("barbiefilme");
    var mario = document.getElementById("mariofilme");
    var freira = document.getElementById("freirafilme");

    if (mario.style.display === "none"){
        mario.style.display = "flex";
        barbie.style.display = "none";
        oppen.style.display = "none";
        freira.style.display = "none";
    }
    else{
        barbie.style.display = "none";
        freira.style.display = "none";
        oppen.style.display = "none";
        mario.style.display = "flex";
    }
}
function showfreira(){

    var oppen = document.getElementById("oppenfilme");
    var barbie = document.getElementById("barbiefilme");
    var mario = document.getElementById("mariofilme");
    var freira = document.getElementById("freirafilme");

    if (freira.style.display === "none"){
        freira.style.display = "flex";
        barbie.style.display = "none";
        oppen.style.display = "none";
        mario.style.display = "none";
    }
    else{
        barbie.style.display = "none";
        mario.style.display = "none";
        oppen.style.display = "none";
        freira.style.display = "flex";
    }
}


  