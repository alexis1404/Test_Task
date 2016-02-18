-- MySQL dump 10.13  Distrib 5.5.47, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: test_todo
-- ------------------------------------------------------
-- Server version	5.5.47-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `test_todo`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `test_todo` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `test_todo`;

--
-- Table structure for table `TODO`
--

DROP TABLE IF EXISTS `TODO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TODO` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task` text NOT NULL,
  `task_status` char(1) NOT NULL,
  `date_task` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TODO`
--

LOCK TABLES `TODO` WRITE;
/*!40000 ALTER TABLE `TODO` DISABLE KEYS */;
INSERT INTO `TODO` VALUES (1,'TEST','1','2016-02-15'),(2,'TEST-TEST','2','2016-02-15'),(3,'TEST-TEST-TEST_EDIT','1','2016-02-15'),(4,'\"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\"','1','2016-02-15'),(5,'Lorem ipsum dolor sit amet, etiam euismod eu, erat dignissim, egestas leo pede vel nunc lacus. Vel curabitur ac. Morbi id egestas ullamcorper. Tellus amet orci arcu proin fringilla, montes arcu ipsum pede, integer sit ultricies etiam amet, nostra in. Donec nullam nec et, dignissim mauris, a dignissim quis ante, bibendum volutpat. Magna maecenas, ipsum sit arcu in porta, magna at dolor sodales wisi magna fermentum, at posuere per. Ante nec velit tellus, ipsum dui nisl, velit fermentum atque ac, molestie ipsum consectetuer sit etiam volutpat. Mauris quam, wisi et elementum malesuada aliquam leo aenean, elit leo. Accumsan nunc dapibus ut, aliquam magna elit lacinia a quis felis, lacus lectus. Sed non, class montes ornare, vel nec neque vitae justo ad ante. Quis orci massa nunc penatibus commodo quis.','2','2016-02-15'),(6,'Nulla in urna bibendum a lorem nec, sed ullamcorper. Hymenaeos enim mus bibendum sed, et libero ac pede laoreet rutrum non, vitae eu nulla nunc conubia, donec fringilla.','1','2016-02-15');
/*!40000 ALTER TABLE `TODO` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-02-15 10:54:43
