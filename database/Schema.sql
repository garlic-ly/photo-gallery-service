DROP DATABASE IF EXISTS airbnbClone;
  CREATE DATABASE airbnbClone;

USE airbnbClone;

DROP TABLE IF EXISTS rooms;
CREATE TABLE rooms (
  id INT NOT NULL auto_increment,
  room_name varchar(100) NOT NULL,
  location_city varchar(255) NOT NULL,
  location_country varchar(100) NOT NULL,
  average_review_point int,
  number_of_reviews int,
  images_id INT,
  PRIMARY KEY (id)
  -- FOREIGN KEY (review_id) REFERENCES reviews(id),
  -- FOREIGN KEY (images_id) REFERENCES images(id)
);

DROP TABLE IF EXISTS images;

CREATE TABLE images (
  id INT NOT NULL auto_increment,
  image_url varchar(250) NOT NULL,
  room_id INT,
  PRIMARY KEY (id)
  -- FOREIGN KEY (room_id) REFERENCES rooms(id)
);

ALTER TABLE rooms ADD FOREIGN KEY (images_id) REFERENCES images(id);
ALTER TABLE images ADD FOREIGN KEY (room_id) REFERENCES rooms(id);


