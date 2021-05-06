-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 06, 2021 at 01:52 PM
-- Server version: 8.0.23-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_saler`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int NOT NULL,
  `details` varchar(256) DEFAULT NULL,
  `name` varchar(32) DEFAULT NULL,
  `address` varchar(128) DEFAULT NULL,
  `phone_number` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `details`, `name`, `address`, `phone_number`) VALUES
(1, 'Este cliente es un pesado', 'Yolanda Pelayo', 'Calle del trébol, 25', '+34 652652652'),
(2, NULL, 'Javier García', 'Av de Madrid, 20', '+34 666222888'),
(3, 'Le gustan los coches automáticos', 'Teresa Viejo', 'C/ Alberto Alcocer, 13', '+34 955223344'),
(4, 'Tiene descuento de minusvalido', 'Jaime Echenique', 'C/ del Congreso, 20', '+34 911223344');

-- --------------------------------------------------------

--
-- Table structure for table `deliveries`
--

CREATE TABLE `deliveries` (
  `delivery_id` int NOT NULL,
  `sale_id` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `other_details` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `deliveries`
--

INSERT INTO `deliveries` (`delivery_id`, `sale_id`, `date`, `other_details`) VALUES
(1, 1, '2016-01-01', ''),
(2, 2, '2020-01-01', ''),
(3, 3, '2012-01-01', ''),
(4, 4, '2017-01-01', ''),
(5, 5, '2020-01-01', ''),
(6, 6, '2015-01-01', ''),
(7, 7, '2019-01-01', '');

-- --------------------------------------------------------

--
-- Table structure for table `ref_model_types`
--

CREATE TABLE `ref_model_types` (
  `model_type_code` varchar(32) NOT NULL,
  `parent_model_type_code` varchar(32) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ref_model_types`
--

INSERT INTO `ref_model_types` (`model_type_code`, `parent_model_type_code`, `name`) VALUES
('COU', 'DEP', 'Coupe'),
('DEP', NULL, 'Deportivos'),
('FAM', 'TUR', 'Familiar'),
('FUL', 'PRO', 'Furgoneta Grande'),
('FUM', 'PRO', 'Furgoneta mediana'),
('FUS', 'PRO', 'Furgoneta pequeña'),
('GRC', 'DEP', 'Gran Cilindrada'),
('MNV', 'TUR', 'MonoVolumen'),
('PRO', NULL, 'Profesional'),
('TUR', NULL, 'Turismo'),
('URB', 'TUR', 'Urban'),
('VCM', 'PRO', 'Vehículo comercial');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `sale_id` int NOT NULL,
  `customer_id` int DEFAULT NULL,
  `vehicle_id` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `other_details` varchar(256) DEFAULT NULL,
  `price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`sale_id`, `customer_id`, `vehicle_id`, `date`, `other_details`, `price`) VALUES
(1, 1, 1, '2015-01-01', '', 10000),
(2, 1, 3, '2011-01-01', '', 22000),
(3, 2, 2, '2012-01-01', '', 16000),
(4, 3, 4, '2013-01-01', '', 25000),
(5, 4, 5, '2014-01-01', '', 21000),
(6, 4, 6, '2015-01-01', '', 18000),
(7, 2, 7, '2015-01-01', '', 26000);

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

CREATE TABLE `vehicles` (
  `vehicle_id` int NOT NULL,
  `model_type_code` varchar(32) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `launch_date` date DEFAULT NULL,
  `other_details` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `vehicles`
--

INSERT INTO `vehicles` (`vehicle_id`, `model_type_code`, `name`, `launch_date`, `other_details`) VALUES
(1, 'URB', 'Ford Ka', '2018-10-30', 'Disponible en 3/5puertas'),
(2, 'URB', 'Seat Ibiza', '2020-06-01', 'Disponible en Diesel/Gasolina'),
(3, 'MNV', 'Citroen Picasso', '2018-01-01', ''),
(4, 'FAM', 'Fiat 500L', '2019-05-01', ''),
(5, 'VCM', 'Renault Clio', '2017-01-01', ''),
(6, 'FUS', 'Renault Kangoo', '2015-01-01', ''),
(7, 'FUL', 'Mercedes VitoXL', '2019-01-01', 'Disponible refrigerada'),
(8, 'GRC', 'Ferrari Testarossa', '2005-01-01', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `deliveries`
--
ALTER TABLE `deliveries`
  ADD PRIMARY KEY (`delivery_id`),
  ADD KEY `sale_id` (`sale_id`);

--
-- Indexes for table `ref_model_types`
--
ALTER TABLE `ref_model_types`
  ADD PRIMARY KEY (`model_type_code`),
  ADD KEY `parent_model_type_code` (`parent_model_type_code`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`sale_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `vehicle_id` (`vehicle_id`);

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`vehicle_id`),
  ADD KEY `model_type_code` (`model_type_code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `deliveries`
--
ALTER TABLE `deliveries`
  MODIFY `delivery_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `sale_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `vehicle_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `deliveries`
--
ALTER TABLE `deliveries`
  ADD CONSTRAINT `deliveries_ibfk_1` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`sale_id`);

--
-- Constraints for table `ref_model_types`
--
ALTER TABLE `ref_model_types`
  ADD CONSTRAINT `ref_model_types_ibfk_1` FOREIGN KEY (`parent_model_type_code`) REFERENCES `ref_model_types` (`model_type_code`);

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`vehicle_id`);

--
-- Constraints for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD CONSTRAINT `vehicles_ibfk_1` FOREIGN KEY (`model_type_code`) REFERENCES `ref_model_types` (`model_type_code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
