-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: todo
-- ------------------------------------------------------
-- Server version	8.0.15

 SET NAMES utf8 ;
--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_bin NOT NULL,
  `color` varchar(7) COLLATE utf8_bin NOT NULL DEFAULT '#1A5276',
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
INSERT INTO `category` VALUES (1,'Today','blue');
UNLOCK TABLES;
