CREATE DATABASE chat;

USE chat;

CREATE TABLE usernames (
  id int PRIMARY KEY,
  username TEXT NOT NULL
);


CREATE TABLE messages (
  id int PRIMARY KEY,
  username_id int NOT NULL,
  message TEXT NOT NULL,
  FOREIGN KEY(username_id)
    REFERENCES usernames(id)
);
