-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13/11/2023 às 02:10
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `cinema`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `cpf` varchar(16) NOT NULL,
  `telefone` varchar(14) NOT NULL,
  `sexo` varchar(200) NOT NULL,
  `end` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `senha` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `clientes`
--

INSERT INTO `clientes` (`id`, `nome`, `cpf`, `telefone`, `sexo`, `end`, `email`, `senha`) VALUES
(61, 'Felipe', '8791841', '8787878', 'Não Especificado', 'afasdfa', 'felipealbuquerque0100@gmail.com', '4234'),
(62, 'oi', '075.117.861-62', '6436436', 'Feminino', 'afasdfa', 'felipedealbuquerque1@gmail.com', '45643');

-- --------------------------------------------------------

--
-- Estrutura para tabela `ingressos`
--

CREATE TABLE `ingressos` (
  `id` int(11) NOT NULL,
  `filme` varchar(200) NOT NULL,
  `cinema` varchar(200) NOT NULL,
  `data` varchar(200) NOT NULL,
  `idioma` varchar(200) NOT NULL,
  `horario` varchar(200) NOT NULL,
  `tipoIngresso` varchar(2) NOT NULL,
  `assento` varchar(200) NOT NULL,
  `metodoPagamento` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `ingressos`
--

INSERT INTO `ingressos` (`id`, `filme`, `cinema`, `data`, `idioma`, `horario`, `tipoIngresso`, `assento`, `metodoPagamento`) VALUES
(316, 'Oppenheimer', 'Terraço Shopping', 'Segunda', 'Legendado 3D', '15h30', 'Me', 'E5,E6', 'Cartão de Crédito'),
(317, 'Oppenheimer', 'Terraço Shopping', 'Segunda', 'Legendado 2D', '15h30', 'Me', 'E5,E6', 'Cartão de Crédito'),
(318, 'Oppenheimer', 'Terraço Shopping', 'Quarta', 'Dublado 2D', '16h00', 'In', 'E5,E6', 'Cartão de Crédito'),
(319, 'Five Nights at Freddys', 'Taguatinga Shopping', 'Quinta', 'Dublado 2D', '16h00', 'Me', 'b7,b8', 'Pix'),
(320, 'Taylor Swift: The Eras Tour', 'Boulevard Shopping', 'Quarta', 'Dublado 2D', '21h00', 'In', 'a8,a9', 'Pix'),
(321, 'Super Mario Bros. O Filme', 'Taguatinga Shopping', 'Quinta', 'Dublado 2D', '16h00', 'Me', 'd10,d11', 'Boleto'),
(322, 'Super Mario Bros. O Filme', 'Taguatinga Shopping', 'Quinta', 'Dublado 2D', '16h00', 'Me', 'd10,d11', 'Boleto');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `pedido` varchar(200) NOT NULL,
  `metodoPagamento` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `ingressos`
--
ALTER TABLE `ingressos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de tabela `ingressos`
--
ALTER TABLE `ingressos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=323;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
