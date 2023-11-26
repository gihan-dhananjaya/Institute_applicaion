DROP DATABASE IF EXISTS Institude;
CREATE DATABASE IF NOT EXISTS Institude;
USE Institude;
CREATE TABLE IF NOT EXISTS student(
    st_id INT PRIMARY KEY,
    st_name VARCHAR(45) NOT NULL,
    st_address VARCHAR(100) NOT NULL,
    gender ENUM('Male','Female')
);

SHOW TABLES;
DESC Student;

INSERT INTO Student VALUES(1001,'Kamal','Colombo','Male'),
(1002,'Nalin','Kurunegala','Male'),
(1003,'Saduni','Jaffna','Female');

INSERT INTO Student VALUES(1004,'Bimal','Ampara','Male'),
(1005,'Anura','Anuradhapura','Male'),
(1006,'Harini','Kaluthara','Female');

INSERT INTO Student VALUES(1007,'Manel','Panadura','Female'),
(1008,'Anura','Anuradhapura','Male'),
(1009,'Harini','Kaluthara','Female');

INSERT INTO Student VALUES(1010,'Manel','Panadura','Female'),
(1011,'Anura','Anuradhapura','Male'),
(1012,'Harini','Kaluthara','Female');

INSERT INTO Student VALUES(1013,'Manel','Panadura','Female'),
(1014,'Anura','Anuradhapura','Male'),
(1015,'Harini','Kaluthara','Female');

CREATE TABLE IF NOT EXISTS Program(
    pro_id INT PRIMARY KEY,
    pro_name VARCHAR(50) NOT NULL,
    pro_duration INT,
    pro_fee DECIMAL(10,2)
);

DESC Program;

INSERT INTO program VALUES(1001,'Java',6,25000.00);

CREATE TABLE registration(
    st_id INT NOT NULL,
    pro_id INT NOT NULL,
    payment ENUM('COMPLETE','PENDING'),
    PRIMARY KEY(st_id,pro_id),
    FOREIGN KEY (st_id) REFERENCES student(st_id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (pro_id) REFERENCES program(pro_id) ON UPDATE CASCADE ON DELETE CASCADE
);