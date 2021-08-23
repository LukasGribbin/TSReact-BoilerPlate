DROP SCHEMA IF EXISTS example;
CREATE SCHEMA example;

USE example;

DROP TABLE IF EXISTS `exampleTable`;

CREATE TABLE `exampleTable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `exampleString` text,
  `exampleNumber` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
);


