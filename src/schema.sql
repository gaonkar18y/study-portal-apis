/*CREATE ROLE webapiadmin WITH LOGIN PASSWORD 'apiadmin123';*/

CREATE DATABASE studypro;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) unique NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    pass VARCHAR(50) NOT NULL,
    userrole VARCHAR(10) NOT NULL
);


CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) unique NOT NULL,
    description VARCHAR(5000) NOT NULL,
    imageUrl VARCHAR(200) NOT NULL,
    price int NOT NULL,
    teacher int REFERENCES users(id) 
);


