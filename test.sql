-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2025 at 06:38 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
--
-- Database: `test`
--
-- --------------------------------------------------------
--
-- Table structure for table `bookings`
--
CREATE TABLE `bookings` (
  `id` int(11) NOT NULL UNSIGNED AUTO_INCREMENT,
  `appointment_code` varchar(7) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `email` varchar(255) NOT NULL,
  `date_time` datetime NOT NULL,
  `technician` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
);
--
-- Dumping data for table `bookings`
--
INSERT INTO `bookings` (`id`, `appointment_code`, `first_name`, `last_name`, `phone`, `email`, `date_time`, `technician`, `created_at`) VALUES
(1, 'APT2121', 'Lionel1', 'Pham1', '+18777804236', 'lioenl1@gmail.com', '2025-07-27 07:40:00', 'Jessica Tran', '2025-07-27 00:40:22'),
(2, 'APT4777', 'Lionel2', 'Pham2', '+18777804236', 'lioenl2@gmail.com', '2025-07-27 07:40:00', 'Jessica Tran', '2025-07-27 00:43:59');
--
-- Indexes for dumped tables
--
--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings` ADD PRIMARY KEY (`id`);
--
-- AUTO_INCREMENT for dumped tables
--
--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
