<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <link rel="stylesheet"href="index-header.css">
    <link rel="stylesheet"href="resultado_cliente_cadastrado.css">

    <script type="application/javascript" src="js/showHeaderFilmes.js"></script>


    <title>Bem-Vindo | CineFlip</title>
    <link rel="icon" type="image/x-icon" href="favicon/favicon.ico">
</head> 

<div class="navbarContainer">

<div class="navbarlogo">
    <a href="index.html"><img src="imagem/cineflip-logo.svg"></a>
</div>

<div class="navbarlinks">
    <a href="cartaz.html"><i class="material-symbols-outlined">movie</i>Filmes em Cartaz</a>
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
        
        $nome=$_POST['nome'];
        $cpf=$_POST['cpf'];
        $telefone=$_POST['telefone'];
        $sexo=$_POST['sexo'];
        $end=$_POST['end'];
        $email=$_POST['email'];
        $senha=$_POST['senha'];

        $sql= "insert into clientes(nome,cpf,telefone,sexo,end,email,senha)
            values('$nome','$cpf','$telefone','$sexo','$end','$email','$senha')";
        $con= mysqli_connect("127.0.0.1","root","","cinema");
        
        if(mysqli_connect_errno()){
            echo "Falha ao conectar ao banco de dados:". mysqli_connect_error();
        }
        mysqli_query($con,$sql);
        
        echo "<h1 class=slide-in-left>Bem vindo, <span style=color:goldenrod>$nome</span></h1>";
        mysqli_close($con);
        
    ?>

    <a class="slide-in-left" href="index.html">Voltar ao Início</a>

</div>




