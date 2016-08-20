CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username_id INT(9),
  roomname_id INT(9),
  text TEXT NOT NULL,
  FOREIGN KEY(username_id) REFERENCES usernames(id),
  FOREIGN KEY(roomname_id) REFERENCES roomnames(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

