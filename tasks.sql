-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 01, 2020 at 07:10 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todoapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `taskname` varchar(100) NOT NULL,
  `addtomyday` varchar(5) NOT NULL,
  `important` varchar(5) NOT NULL,
  `due` varchar(20) NOT NULL,
  `addnote` varchar(250) NOT NULL,
  `created_on` varchar(50) NOT NULL,
  `last_modified` varchar(50) NOT NULL,
  `completed` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `taskname`, `addtomyday`, `important`, `due`, `addnote`, `created_on`, `last_modified`, `completed`) VALUES
(27, 'IOE mini project', '', 'false', '2020-03-10', 'Do collect Data from sensors then analysis of that data and use same for R programming project', 'January 19, 2020 08:43:27am', 'January 19, 2020 12:35:47pm', ''),
(28, 'Big Data project', '', 'false', '2020-03-10', 'Crime detection ChicagoPrediction of crime rate', 'January 19, 2020 08:45:58am', 'January 19, 2020 11:48:52am', ''),
(29, 'R programming mini project', '', 'true', '2020-03-10', 'use data which is generated from IOE project', 'January 19, 2020 08:46:53am', 'January 19, 2020 08:46:53am', ''),
(31, 'build angular app', 'true', 'true', '2020-01-19', 'make it creative', 'January 19, 2020 12:23:54pm', 'January 19, 2020 12:24:14pm', ''),
(32, 'Paper publication for BE project', '', 'true', '2020-02-15', 'IJSERhttps://ijser.org/?gclid=Cj0KCQiAmsrxBRDaARIsANyiD1rp0eKgIrYXPaAv58oTNJpd9sQc2B5k38ED5S2e6vibDrhs-neJOXYaAuxgEALw_wcB', 'January 19, 2020 12:25:26pm', 'January 30, 2020 12:29:10pm', ''),
(33, 'test', 'true', 'true', '2020-01-20', 'test update', 'January 20, 2020 08:00:29am', 'January 20, 2020 08:00:44am', ''),
(34, 'Documentation of fyp', 'true', 'true', '2020-02-20', 'IJSERhttps://ijser.org/?gclid=Cj0KCQiAmsrxBRDaARIsANyiD1rp0eKgIrYXPaAv58oTNJpd9sQc2B5k38ED5S2e6vibDrhs-neJOXYaAuxgEALw_wcB', 'January 30, 2020 12:28:02pm', 'January 30, 2020 12:28:10pm', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
