-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: todo
-- ------------------------------------------------------
-- Server version	8.0.15

 SET NAMES utf8 ;

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `settings` (
  `start_page` int(11) NOT NULL DEFAULT '0',
  `color` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `settings`
--

LOCK TABLES `settings` WRITE;
UNLOCK TABLES;
