<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <link rel="stylesheet" href="resultado_ingresso.css">

    <script type="application/javascript" src="js/showHeaderFilmes.js"></script>

   


    <title>CineFlip</title>
</head>

<div class="navbarContainer" id="nav">
    <div class="navbarlogo">
        <a href="index.html"><img src="imagem/cineflip-logo.svg" /></a>
    </div>

    <div class="navbarlinks">
        <a href="cartaz.html"><i class="material-symbols-outlined">movie</i>Filmes
            em Cartaz</a>
        <a href="lanches.html"><i class="material-symbols-outlined">fastfood</i>Lanches</a>
        <a href="unidades.html"><i class="material-symbols-outlined">location_on</i>Unidades</a>
    </div>

    <div class="navlogin-btn">
        <a href="login.html"><i class="material-symbols-outlined">account_circle</i>Login</a>
        <a href="cad_clientes.html"><i class="material-symbols-outlined">account_circle</i>Registrar</a>
    </div>
</div>

<div class="container-geral">

    <?php

    $filme = $_POST['filme'];
    $cinema = $_POST['cinema'];
    $data = $_POST['data'];
    $idioma = $_POST['idioma'];
    $horario = $_POST['horario'];
    $tipoIngresso = $_POST['tipoIngresso'];
    $assento = $_POST['assento'];
    $metodoPagamento = $_POST['metodoPagamento'];

    $assento = implode(',', $assento);

    $sql = "insert into ingressos(filme,cinema,data,idioma,horario,tipoIngresso,assento,metodoPagamento)
            values('$filme','$cinema','$data','$idioma','$horario','$tipoIngresso','$assento','$metodoPagamento')";
    $con = mysqli_connect("127.0.0.1", "root", "", "cinema");

    if (mysqli_connect_errno()) {
        echo "Falha ao conectar ao banco de dados:" . mysqli_connect_error();
    }
    mysqli_query($con, $sql);

    ?>

    <div class="container-desenho-form slide-in-left">

        <div class="desenho">
            <img src="desenho-login.svg">
            <img class="responsive-img" src="imagem/cineflip-logo.svg" style="width:150px;height:40px">
        </div>

        <div id="pedidoprint" class="pedido-detalhes">
            <h1>Pagamento realizado</h1>
            <h2 class="detalhes">Detalhes do pedido: </h2>
            <?php

            
 
            echo "<p><span style=color:goldenrod>Local: </span>&nbsp $cinema";
            echo "<p><span style=color:goldenrod>Filme: </span>&nbsp $filme";
            echo "<p><span style=color:goldenrod>Data: </span>&nbsp $data";
            echo "<p><span style=color:goldenrod>Horário: </span>&nbsp $horario";
            echo "<p><span style=color:goldenrod>Idioma: </span>&nbsp $idioma";
            echo "<p><span style=color:goldenrod>Tipo de Ingresso: </span>&nbsp $tipoIngresso";
            echo "<p><span style=color:goldenrod>Método de Pagamento: </span>&nbsp $metodoPagamento";
            ?>
             <script type="text/javascript" src="http://jqueryjs.googlecode.com/files/jquery-1.3.1.min.js"> </script>
   

            <div class="row-container">
                <p><span style="color:goldenrod">Assentos:</span>
                    <?php
                     $i = 0;
                        if (!empty ($_POST['assento'])) {
                            foreach ($_POST['assento'] as $assentoprint) {
                                echo '&nbsp' . $assentoprint . '&nbsp';
                               
                                $i++;
          
                                
                                
                            }
                            if ($tipoIngresso == "Meia") {
                                $preco = 15;
                            }
                            if ($tipoIngresso == "Inteira"){
                                $preco = 30;
                            }
                            if ($tipoIngresso == "Inteira" && $i > 1){
                                $preco = 30 * $i;
                            }
                            if ($tipoIngresso == "Meia" && $i > 1){
                                $preco = 15 * $i;
                            }
                 
                        }
            

                    ?>

            </div>
            <?php
            echo "<p><span style=color:goldenrod>Valor Final: </span>&nbsp R$$preco,00</p>";
            ?>

           <script src="js/printDiv.js"type="text/javascript"></script>

          
           <a onclick="printDiv()">Imprimir Ingresso</a>
        </div>
  

    </div>

</div>

<a class="inicio" href="index.html">Voltar ao Início</a>


</div>