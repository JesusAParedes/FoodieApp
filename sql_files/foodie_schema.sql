DROP DATABASE IF EXISTS foodAPI;
CREATE DATABASE IF NOT EXISTS foodAPI;
USE foodAPI;

DROP TABLE IF EXISTS users,
                     foodItems,
                     userCredentials,
                     restaurants;

CREATE TABLE users (
    user_id     INT         NOT NULL  AUTO_INCREMENT,
    first_name  VARCHAR(50) NOT NULL,
    last_name   VARCHAR(50) NOT NULL,
    email      VARCHAR(50) NOT NULL,
    PRIMARY KEY (user_id)

);

CREATE TABLE foodItems (
    food_id     INT NOT NULL AUTO_INCREMENT,
    user_id     INT NOT NULL,
    food_name   VARCHAR(50) NOT NULL,
    rating      VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    PRIMARY KEY (food_id)
    ON DELETE CASCADE
);

CREATE TABLE userCredentials (
    user_id     INT         NOT NULL,
    username    VARCHAR(50) NOT NULL,
    pw          VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
    ON DELETE CASCADE
);

CREATE TABLE restaurants (
    food_id     INT         NOT NULL AUTO_INCREMENT,
    name        VARCHAR(50) NOT NULL,
    address     VARCHAR(50) NOT NULL,
    phone       VARCHAR(50) NOT NULL,
    hours       VARCHAR(50) NOT NULL,
    FOREIGN KEY (food_id) REFERENCES foodItems(food_id)
    
);