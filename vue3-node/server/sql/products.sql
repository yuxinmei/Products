
drop database IF EXISTS Products;
create database Products;



drop table IF EXISTS Products.products;

CREATE TABLE Products.products (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT 'Mae',
  `createdAt` datetime NOT NULL,
  `updatedBy` varchar(255) DEFAULT 'Mae',
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ;

INSERT INTO Products.products
(name, stock, createdBy, createdAt, updatedBy, updatedAt)
VALUES( 'apple', 3, 'yu',now(), 'yu',now());

INSERT INTO Products.products
(name, stock, createdBy, createdAt, updatedBy, updatedAt)
VALUES( 'pear', 32, 'yu',now(), 'yu',now());

INSERT INTO Products.products
(name, stock, createdBy, createdAt, updatedBy, updatedAt)
VALUES( 'orange', 63, 'yu',now(), 'yu',now());

