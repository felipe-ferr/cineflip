<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="admin_login.css">
    <link rel="stylesheet" href="index-header.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <script>
        function ativo() {
  var element = document.getElementById("nav-btn");
  element.classList.add("active");
}
    </script>

</head>
<body>

    <div style="position:relative" class="navbarContainer">

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
        <div class="dashboard">

            <div class="dashboard-nav">
                <a class="active" id="nav-btn"onclick="ativo()">Clientes</a>
                <a id="nav-btn" onclick="ativo()">Ingressos</a>
                <a id="nav-btn" onclick="ativo()">Pedidos</a>
            </div>

            <div class="tables">
                <?php
                $con= mysqli_connect("127.0.0.1","root","","cinema");
                if(mysqli_connect_errno()){
                    echo "Failed to connect to MySQL: ". mysqli_connect_error();
                }
                $result= mysqli_query($con,"SELECT * FROM clientes");
            ?>
            <div class="container">
                    <table id="prof">
                        <caption>Lista de Clientes</caption>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                            <th>Sexo</th>
                            <th>Endereço</th>
                            <th>E-mail</th>
                            <th>Senha</th>
                            <th>Deletar</th>
                            <th>Alt</th>
                        </tr>
        
                        <?php
                            while($row=mysqli_fetch_array($result)){
                        ?>
        
                        <tr>
                            <td>
                                <?php echo $row['id']; ?>
                            </td>
                            <td>
                                <?php echo $row['nome'] ?>
                            </td>
                            <td>
                                <?php echo $row['cpf'] ?>
                            </td>
                            <td>
                                <?php echo $row['telefone'] ?>
                            </td>
                            <td>
                                <?php echo $row['sexo'] ?>
                            </td>
                            <td>
                                <?php echo $row['end'] ?>
                            </td>
                            <td>
                                <?php echo $row['email'] ?>
                            </td>
                            <td>
                                <?php echo $row['senha'] ?>
                            </td>
                            <td>
                                <form action="realizadelcliente.php" method="post">
                                    <input type="hidden" name="id" value="<?php echo $row["id"]; ?>">
                                    <button type="submit" name="botdelprof" value="ok" id="del"><i class="material-symbols-outlined">delete</i>Deletar</button>
                                </form>

                           

                            </td>
                            <td>
                                <form action="formaltclientes.php" method="post">
                                    <input type="hidden" name="id" value="<?php echo $row["id"]; ?>">
                                    <button type="submit" name="botaltprof" value="ok" id="alt"><i class="material-symbols-outlined">edit</i>Alterar</button>
                                </form>
                            </td>
                        </tr>
                        
                        <?php
                            } mysqli_close($con);
                        ?>
        
                    </table>
            </div>
        </div>
    </div>