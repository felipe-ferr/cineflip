<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="admin_login.css">
    <link rel="stylesheet" href="index-header.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


</head>

<body>

    <div style="position:relative" class="navbarContainer">

        <div class="navbarlogo">
            <a href="index.html"><img src="imagem/cineflip-logo.svg"></a>
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
    <script src="js/showDashboardTables.js"></script>
    <div class="container-geral">
        <div class="dashboard">

            <div class="dashboard-container">
                <div id="dash-nav" class="dashboard-nav">


                <label class="data">
                    <input checked onclick="showclientes()"type="radio" value="1" name="botao" />
                    <p>Clientes</p>
                </label>

                <label class="data">
                    <input onclick="showingressos()"type="radio" value="2"name="botao"/>
                    <p>Ingressos</p>
                </label>


                <label class="data">
                    <input onclick="showpedidos()"type="radio" value="3"name="botao"/>
                    <p>Pedidos</p>
                </label>


                </div>

            </div>


            <div class="tables">
                <?php
                $con = mysqli_connect("127.0.0.1", "root", "", "cinema");
                if (mysqli_connect_errno()) {
                    echo "Failed to connect to MySQL: " . mysqli_connect_error();
                }
                $result = mysqli_query($con, "SELECT * FROM clientes");
                ?>
                <div style="overflow-x:auto" id="cliente" class="container-clientes">
                    <table>
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
                        while ($row = mysqli_fetch_array($result)) {
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
                                        <input type="hidden" name="id" value="<?php echo $row["id"] ?>">
                                        <button type="submit" name="botdelcliente" value="ok" id="del"><i
                                                class="material-symbols-outlined">delete</i>Deletar</button>
                                    </form>

                                </td>
                                <td>
                                    <form action="formaltclientes.php" method="post">
                                        <input type="hidden" name="id" value="<?php echo $row["id"] ?>">
                                        <button type="submit" name="botaltcliente" value="ok" id="alt"><i
                                                class="material-symbols-outlined">edit</i>Alterar</button>
                                    </form>
                                </td>
                            </tr>
                            <?php
                        }
                        mysqli_close($con);
                        ?>

                    </table>
                </div>

            </div>

            <div class="tables">
                <?php
                $con = mysqli_connect("127.0.0.1", "root", "", "cinema");
                if (mysqli_connect_errno()) {
                    echo "Failed to connect to MySQL: " . mysqli_connect_error();
                }
                $result = mysqli_query($con, "SELECT * FROM ingressos");
                ?>
                <div style="overflow-x:auto" id="ingresso" class="container-ingressos">
                    <table>
                        <caption>Lista de Ingressos</caption>
                        <tr>
                            <th>Id</th>
                            <th>Filme</th>
                            <th>Data</th>
                            <th>Idioma</th>
                            <th>Horario</th>
                            <th>Tipo de Ingresso</th>
                            <th>Assento(s)</th>
                            <th>Método de Pagamento</th>
                            <th>Deletar</th>
                            <th>Alt</th>
                        </tr>

                        <?php
                        while ($row = mysqli_fetch_array($result)) {
                            ?>

                            <tr>
                                <td>
                                    <?php echo $row['id']; ?>
                                </td>
                                <td>
                                    <?php echo $row['filme'] ?>
                                </td>
                                <td>
                                    <?php echo $row['data'] ?>
                                </td>
                                <td>
                                    <?php echo $row['idioma'] ?>
                                </td>
                                <td>
                                    <?php echo $row['horario'] ?>
                                </td>
                                <td>
                                    <?php echo $row['tipoIngresso'] ?>
                                </td>
                                <td>
                                    <?php echo $row['assento'] ?>
                                </td>
                                <td>
                                    <?php echo $row['metodoPagamento'] ?>
                                </td>
                                <td>
                                    <form action="realizadelingresso.php" method="post">
                                        <input type="hidden" name="id" value="<?php echo $row["id"] ?>">
                                        <button type="submit" name="botdelingresso" value="ok" id="del"><i
                                                class="material-symbols-outlined">delete</i>Deletar</button>
                                    </form>

                                </td>
                                <td>
                                    <form action="formaltingressos.php" method="post">
                                        <input type="hidden" name="id" value="<?php echo $row["id"] ?>">
                                        <button type="submit" name="botaltingresso" value="ok" id="alt"><i
                                                class="material-symbols-outlined">edit</i>Alterar</button>
                                    </form>
                                </td>
                            </tr>
                            <?php
                        }
                        mysqli_close($con);
                        ?>

                    </table>
                </div>

            </div>

        </div>

        
    <script src="js/dashboardBotoesAtivos.js"></script>
  </body>