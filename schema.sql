-- CREATE DATABASE cowList;
USE cowList;

DROP TABLE IF EXISTS cows;

CREATE TABLE cows (
  cow_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(60) NOT NULL UNIQUE,
  description VARCHAR(255) NOT NULL,
  favorite BOOLEAN
);

-- mysql -u root -p < schema.sql