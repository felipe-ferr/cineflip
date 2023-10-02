function showbarbie(){

    var oppen = document.getElementById("oppenfilme");
    var barbie = document.getElementById("barbiefilme");

    if (barbie.style.display === "none"){
        barbie.style.display = "flex";
        oppen.style.display = "none";
    }
    else{
        oppen.style.display = "none";
        barbie.style.display = "flex";
    }
}

function showoppenheimer(){

    var oppen = document.getElementById("oppenfilme");
    var barbie = document.getElementById("barbiefilme");

    if (oppen.style.display === "none"){
        oppen.style.display = "flex";
        barbie.style.display = "none";
    }
    else{
        barbie.style.display = "none";
        oppen.style.display = "flex";
    }
}


  