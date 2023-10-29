    // Identifica o container dos botões
        var btnContainer = document.getElementById("dashboard-nav");
        
        // Variável para os botôes com a classe "filme-poster"
        var btns = btnContainer.getElementsByClassName("btn");
        
        // For para adicionar a classe ativo para o botão ativo
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("ativo");
            current[0].className = current[0].className.replace(" ativo", "");
            this.className += " ativo";
          });
        }