    // Identifica o container dos botões
        var btnContainer = document.getElementById("myDIV");
        
        // Variável para os botôes com a classe "filme-poster"
        var btns = btnContainer.getElementsByClassName("filme-poster");
        
        // For para adicionar a classe active para o botão ativo
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
          });
        }