CREATE DATABASE chat;

USE chat;

CREATE TABLE usernames (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username TEXT
);

CREATE TABLE roomnames (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  roomname TEXT
);

CREATE TABLE messages (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username_id int,
  roomname_id int,
  message TEXT,
  FOREIGN KEY(username_id)
    REFERENCES usernames(id),
  FOREIGN KEY(roomname_id)
    REFERENCES roomnames(id)
);
