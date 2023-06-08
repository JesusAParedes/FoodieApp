DROP DATABASE IF EXISTS foodie-app;
CREATE DATABASE IF NOT EXISTS foodie-app;
USE foodie-app;

DROP TABLE IF EXISTS users,
                     foodItems,
                     restaurants;

CREATE TABLE users (
    user_id     INT         NOT NULL  AUTO_INCREMENT,
    first_name  VARCHAR(50) NOT NULL,
    last_name   VARCHAR(50) NOT NULL,
    email      VARCHAR(50) NOT NULL,
    username    VARCHAR(50) NOT NULL,
    password          VARCHAR(100) NOT NULL,
    PRIMARY KEY (user_id)

);

-- CREATE TABLE restaurants (
--     store_id    INT         NOT NULL AUTO_INCREMENT,
--     name        VARCHAR(50) NOT NULL,
--     address     VARCHAR(50) NOT NULL,
--     phone       VARCHAR(50) NOT NULL,
--     hours       VARCHAR(50) NOT NULL,
--     PRIMARY KEY (store_id)
-- );

CREATE TABLE foodItems (
    food_id     INT NOT NULL AUTO_INCREMENT,
    user_id     INT,
    food_name   VARCHAR(100) NOT NULL,
    restaurant  VARCHAR(100),
    rating      VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    PRIMARY KEY (food_id)
);