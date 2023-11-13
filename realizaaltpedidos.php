<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="admin_login.css">
    <link rel="stylesheet" href="index-header.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

</head>
<body>
    <div class="container-geral">
         <?php
            $id=$_POST['id'];
            $pedido=$_POST['pedido'];
            $metodoPagamento=$_POST['metodoPagamento'];
            

            $sql="update pedidos set id='$id',pedido='$pedido',metodoPagamento='$metodoPagamento'
            where id=$id";

            $con=mysqli_connect("127.0.0.1","root","","cinema");
            if(mysqli_connect_errno()){
                echo "Failed to connect to MySQL: ". mysqli_connect_error();
            }
            mysqli_query($con,$sql);
            echo "<h2>Pedido alterado com sucesso!</h2>"
        ?>

        <a href="admin_login.php">Voltar</a>