DROP DATABASE IF EXISTS foodAPI;
CREATE DATABASE IF NOT EXISTS foodAPI;
USE foodAPI;

DROP TABLE IF EXISTS users,
                     foodItems,
                     restaurants;

CREATE TABLE users (
    user_id     INT         NOT NULL  AUTO_INCREMENT,
    first_name  VARCHAR(50) NOT NULL,
    last_name   VARCHAR(50) NOT NULL,
    email      VARCHAR(50) NOT NULL,
    username    VARCHAR(50) NOT NULL,
    pw          VARCHAR(50) NOT NULL,
    PRIMARY KEY (user_id)

);

CREATE TABLE restaurants (
    store_id    INT         NOT NULL AUTO_INCREMENT,
    name        VARCHAR(50) NOT NULL,
    address     VARCHAR(50) NOT NULL,
    phone       VARCHAR(50) NOT NULL,
    hours       VARCHAR(50) NOT NULL,
    PRIMARY KEY (store_id)
);

CREATE TABLE foodItems (
    store_id     INT NOT NULL,
    user_id     INT NOT NULL,
    food_name   VARCHAR(50) NOT NULL,
    rating      VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (store_id) REFERENCES restaurants(store_id)
);