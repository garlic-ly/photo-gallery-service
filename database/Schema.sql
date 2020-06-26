DROP DATABASE IF EXISTS airbnbClone;
  CREATE DATABASE garlicly;

USE garlicly;

DROP TABLE IF EXISTS rooms;
CREATE TABLE rooms (
  id INT NOT NULL auto_increment,
  room_name varchar(100) NOT NULL,
  location_city varchar(255) NOT NULL,
  location_country varchar(100) NOT NULL,
  average_review_point varchar(10),
  number_of_reviews int(5),
  is_superhost boolean,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS images;

CREATE TABLE images (
  id INT NOT NULL auto_increment,
  image_url varchar(250) NOT NULL,
  image_description varchar(250) NOT NULL,
  room_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);