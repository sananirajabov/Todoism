-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: todo
-- ------------------------------------------------------
-- Server version	8.0.15

 SET NAMES utf8 ;

--
-- Table structure for table `todo`
--

DROP TABLE IF EXISTS `todo`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `todo` (
  `todo_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `task` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `completed` int(1) DEFAULT '0',
  `created_at` date DEFAULT NULL,
  PRIMARY KEY (`todo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `todo`
--

LOCK TABLES `todo` WRITE;
UNLOCK TABLES;