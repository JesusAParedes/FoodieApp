DROP DATABASE IF EXISTS foodAPI;
CREATE DATABASE IF NOT EXISTS foodAPI;
USE foodAPI;

DROP TABLE IF EXISTS users,
                     food,
                     userCredentials,
                     restaurants;

CREATE TABLE users (
    user_id     INT         NOT NULL  AUTO_INCREMENT,
    first_name  VARCHAR(50) NOT NULL,
    last_name   VARCHAR(50) NOT NULL,
    email      VARCHAR(50) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE food (
    food_id     INT NOT NULL AUTO_INCREMENT,
    user_id     INT NOT NULL,
    food_name   VARCHAR(50) NOT NULL,
    rating      VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    PRIMARY KEY (food_id)
);

CREATE TABLE userCredentials (
    user_id     INT         NOT NULL,
    username    VARCHAR(50) NOT NULL,
    pw          VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE restaurants (
    food_id     INT         NOT NULL AUTO_INCREMENT,
    name        VARCHAR(50) NOT NULL,
    address     VARCHAR(50) NOT NULL,
    phone       VARCHAR(50) NOT NULL,
    hours       VARCHAR(50) NOT NULL,
    FOREIGN KEY (food_id) REFERENCES food(food_id)
);


INSERT INTO users
    (user_id, first_name, last_name, email)
VALUES
    (11, "John", "Jacob", "jj@example.com"),
    (22, "Yu", "Kwon", "yk2@swan.org"),
    (32, "Jane", "Stamos", "jstamos@thatplace.com"),
    (42, "Hawk", "Griffin", "eagle@yahoo.com");

INSERT INTO food
    (food_id, user_id, food_name, rating)
VALUES
    (1, 11, "Big Carl", "2/5"), 
    (2, 32, "Chicken Quesadilla", "3/5"), 
    (3, 22, "Beef Fajita Tacos", "5/5"),
    (4, 42, "Buldak", "5/5");

INSERT INTO restaurants
    (food_id, name, address, phone, hours)
VALUES
    (1, "Carl's Jr", "1250 Somewhere Ln", "800-966-2500", "9AM-9PM"),
    (2, "Taco Bell", "999 Island Ave", "929-556-2746", "8AM-12AM"),
    (3, "El Patron", "168 Lavender Valley", "222-666-4444", "6AM-7PM"),
    (4, "SoHa", "892 Rocky Rd", "230-555-8888", "8AM-8PM");

INSERT INTO userCredentials
    (user_id, username, pw)
VALUES
    (11, "jjrocks", "jdaman2!"),
    (22, "y2serious", "k8tie"),
    (32, "jessesgirl", "G018T0"),
    (42, "hawklanded", "!i9@l0"); 


