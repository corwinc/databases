CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int PRIMARY KEY,
  username_id int,
  roomname_id int,
  message TEXT
);

CREATE TABLE usernames (
  id int PRIMARY KEY,
  username TEXT
);

CREATE TABLE roomnames (
  id int PRIMARY KEY,
  roomname TEXT
);