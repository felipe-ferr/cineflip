<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="admin_login.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

</head>
<body>
 <?php
            $id=$_POST['id'];
            $sql = "delete from ingressos where id='$id'";
            $con = mysqli_connect("localhost","root","","cinema");
            if(mysqli_connect_errno()){
                echo "Failed to connect to MySQL: ". mysqli_connect_error();
            }
            mysqli_query($con,$sql);
            echo "<h2>Ingresso deletado com sucesso!</h2>";
            mysqli_close($con);
        ?>
        <a href="admin_login.php">Voltar</a>
            
</body>