-- Creates new database
CREATE DATABASE burgers_db;
-- Use the database
USE burgers_db;
-- Create table 
CREATE TABLE burgers (
-- Add columns
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(100),
	devoured BOOLEAN false DEFAULT,
	PRIMARY KEY(id)
);
--Uses the burgers_db
USE burgers_db;
--Adding data to rows
INSERT INTO burgers (burger_name)
VALUES ("Grilled Chicken Burger");

INSERT INTO burgers (burger_name)
VALUES ("Classic Beef Burger");

INSERT INTO burgers (burger_name)
VALUES ("Cheeseburger")