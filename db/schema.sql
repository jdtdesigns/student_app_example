DROP DATABASE IF EXISTS student_example_db;
CREATE DATABASE student_example_db;

USE student_example_db;

CREATE TABLE courses (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  course_type VARCHAR(250),
  start_date DATE
);

CREATE TABLE students (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(250),
  course_id INT,
  FOREIGN KEY (course_id)
    REFERENCES courses (id)
    ON DELETE SET NULL
);

INSERT INTO courses (course_type, start_date) VALUES
  ('Fullstack', '2023-05-30');

INSERT INTO students (name, course_id) VALUES
  ('Cassandra', 1),
  ('Megan', 1);



