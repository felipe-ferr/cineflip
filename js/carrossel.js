  function scrollRight() {
        const element = document.getElementById("final");
        var botaoesquerda = document.getElementById("botaoesquerda");
        var botaodireita = document.getElementById("botaodireita");
        var bola1 = document.getElementById("bola1");
        var bola2 = document.getElementById("bola2");
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        botaodireita.style.opacity = "0.3";
        botaoesquerda.style.opacity = "1";
        bola2.style.backgroundColor = "goldenrod";
        bola1.style.backgroundColor = "gray";
        
      }

      function esquerda() {
        
        const element = document.getElementById("start");
        var bola1 = document.getElementById("bola1");
        var bola2 = document.getElementById("bola2");
        var botaoesquerda = document.getElementById("botaoesquerda");
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        botaoesquerda.style.opacity = "0.3";
        botaodireita.style.opacity = "1";
        bola1.style.backgroundColor = "goldenrod";
        bola2.style.backgroundColor = "gray";
      }
      window.onscroll = function() {navScrollDown()};