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
        $result= mysqli_query($con,"SELECT * FROM clientes WHERE id='$id'");
    ?>
    <div class="containerprincipal">
        <form action="realizaaltclientes.php" method="post">
                <?php
                    while($row=mysqli_fetch_array($result)){
                ?>
                <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
                <div class="inputContainer">
                        <input required type="text"name="nome"value="<?php echo $row['nome'];?>"><p>Nome:</p><i class="material-symbols-outlined">account_circle</i>
                </div>

                <div class="inputContainer">
                        <input required type="text"name="cpf"value="<?php echo $row['cpf'];?>"><p>CPF:</p><i class="material-symbols-outlined">description</i>
                </div>

                <div class="inputContainer">
                        <input required type="text"name="telefone"value="<?php echo $row['telefone'];?>"><p>Telefone:</p><i class="material-symbols-outlined">phone</i>
                </div>

                <div class="inputContainer">
                        <input required type="text"name="sexo"value="<?php echo $row['sexo'];?>"><p>Sexo:</p><i class="material-symbols-outlined">girl</i>
                </div>

                <div class="inputContainer">
                        <input required type="text"name="end"value="<?php echo $row['end'];?>"><p>Endereço:</p><i class="material-symbols-outlined">location_on</i>
                </div>

                <div class="inputContainer">
                        <input required type="text"name="email"value="<?php echo $row['email'];?>"><p>E-mail:</p><i class="material-symbols-outlined">mail</i>
                </div>

                <div class="inputContainer">
                        <input required type="text"name="senha"value="<?php echo $row['senha'];?>"><p>Senha:</p><i class="material-symbols-outlined">key</i>
                </div>
               
                
                <button class="submit" type="submit" name="enviar" value="ok" id="btn">Alterar</button>
                <?php
                    }
                ?>
        </form>
    </div>