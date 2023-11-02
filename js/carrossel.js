  function scrollRight() {
        const element = document.getElementById("final");
        var botaoesquerda = document.getElementById("botaoesquerda");
        var botaodireita = document.getElementById("botaodireita");
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        botaodireita.style.opacity = "0.3";
        botaoesquerda.style.opacity = "1";
        
      }

      function esquerda() {
        
        const element = document.getElementById("start");
        var botaoesquerda = document.getElementById("botaoesquerda");
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        botaoesquerda.style.opacity = "0.3";
        botaodireita.style.opacity = "1";
      }
      window.onscroll = function() {navScrollDown()};