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

    $metodoPagamento = $_POST['metodoPagamento'];
    $pedido = $_POST['pedido'];

    $pedido = implode(',', $pedido);

    $sql = "insert into pedidos(pedido,metodoPagamento)
            values('$pedido','$metodoPagamento')";
    $con = mysqli_connect("127.0.0.1", "root", "", "cinema");

    if (mysqli_connect_errno()) {
        echo "Falha ao conectar ao banco de dados:" . mysqli_connect_error();
    }
    mysqli_query($con, $sql);

    ?>

    <div class="container-desenho-form slide-in-left">

        <div class="desenho">
            <img src="imagem/desenho-login.svg">
            <img class="responsive-img" src="imagem/cineflip-logo.svg" style="width:150px;height:40px">
        </div>

        <div id="pedidoprint" class="pedido-detalhes">
            <h1>Pagamento realizado</h1>
            <h2 class="detalhes">Detalhes do pedido: </h2>
            <?php
            echo "<p><span style=color:goldenrod>Método de Pagamento: </span>&nbsp $metodoPagamento";
            ?>

            <div class="row-container">
                <p><span style="color:goldenrod">Pedido:</span>
                <?php
                     $i = 0;
                        if (!empty ($_POST['pedido'])) {
                            foreach ($_POST['pedido'] as $pedidoprint) {
                                echo '&nbsp' . $pedidoprint . ',';
                            }
                        }


                    ?>

            </div>

        </div>

    </div>


</div>

<a class="inicio" href="index.html">Voltar ao Início</a>


</div>