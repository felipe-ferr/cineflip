function mostrarIdioma(){
    var x = document.getElementById("mostraridioma");

    x.style.display = "flex";

    
    

}
function mostrarAssentos(){
        var x = document.getElementById("mostrarassentos");
        var y = document.getElementById("mostrarpagamento");
        var submit = document.getElementById("botaosubmit");

        x.style.display = "flex";
        y.style.display = "flex";
        submit.style.display = "block"
        document.getElementById("mostrarassentos").scrollIntoView({behavior: "smooth"});

}
function mostrarHorarios(){
    var x = document.getElementById("mostrarhorarios");

    x.style.display = "flex";


}
function mostrarTipoingresso(){
    var x = document.getElementById("mostrartipoingresso");

    x.style.display = "flex";


}