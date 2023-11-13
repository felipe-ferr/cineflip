<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="admin_login.css">
    <link rel="stylesheet" href="alterar_cadastro.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

</head>
<body>

<div class="container-geral">
 <?php
        $id= $_POST['id'];
        $con= mysqli_connect("127.0.0.1","root","","cinema");
        if(mysqli_connect_errno()){
            echo "Failed to connect to MySQL: ". mysqli_connect_error();
        }
        $result= mysqli_query($con,"SELECT * FROM pedidos WHERE id='$id'");
    ?>
    <div class="containerprincipal">
        <form action="realizaaltpedidos.php" method="post">
                <?php
                    while($row=mysqli_fetch_array($result)){
                ?>
                <input type="hidden" name="id" value="<?php echo $row['id']; ?>">

                <div class="inputContainer">
                        <input required type="text"name="metodoPagamento"value="<?php echo $row['pedido'];?>"><p>Pedido:</p><i class="material-symbols-outlined">credit_card</i>
                </div>
                
                <div class="inputContainer">
                        <input required type="text"name="metodoPagamento"value="<?php echo $row['metodoPagamento'];?>"><p>Método de Pagamento:</p><i class="material-symbols-outlined">credit_card</i>
                </div>
               
                
                <button class="submit" type="submit" name="enviar" value="ok" id="btn">Alterar</button>
                <?php
                    }
                ?>
        </form>
    </div>