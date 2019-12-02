-----CREANDO LA BASE DE DATOS-----
CREATE DATABASE crudemysql;
------utilizando la base de datos-----
USE crudemysql;
------creando tabla-------
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);
------TP SHOW ALL TABLES------
SHOW TABLES;
-----DESCRIBE TABLES-----
Describe customer;